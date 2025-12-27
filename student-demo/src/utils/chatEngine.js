// Chat Engine - Intent Detection and Response Generation
import {
  intents,
  fallbackResponses,
  contextFollowUps,
  getDishFromKeyword,
  getDishNutritionResponse
} from '../data/chatbotKnowledge';
import { dishes, calculateImpact, getTodayName, getDishesForDay } from '../data/mockData';

// Conversation context tracker
let conversationContext = {
  lastIntent: null,
  lastDish: null,
  messageCount: 0,
  topics: [] // Track discussed topics
};

// Detect intent from user message
export const detectIntent = (message) => {
  const lowerMessage = message.toLowerCase().trim();

  // First, check for dish-specific queries
  const dish = getDishFromKeyword(lowerMessage);
  if (dish) {
    return { intent: 'dish_specific', dish };
  }

  // Check each intent's keywords
  for (const [intentName, intentData] of Object.entries(intents)) {
    for (const keyword of intentData.keywords) {
      if (lowerMessage.includes(keyword.toLowerCase())) {
        return { intent: intentName, dish: null };
      }
    }
  }

  // Check for contextual "yes" responses
  if (conversationContext.lastIntent && ['yes', 'yeah', 'sure', 'okay', 'ok', 'please'].some(w => lowerMessage.includes(w))) {
    return { intent: 'yes_continue', dish: null };
  }

  return { intent: 'fallback', dish: null };
};

// Replace template variables with actual values
const replaceVariables = (template, studentData) => {
  const impact = calculateImpact(studentData.logs || []);

  // Find user's favorite dish (most rated)
  const dishCounts = {};
  (studentData.logs || []).forEach(log => {
    dishCounts[log.dish_id] = (dishCounts[log.dish_id] || 0) + 1;
  });
  const favoriteDishId = Object.entries(dishCounts).sort((a, b) => b[1] - a[1])[0]?.[0];
  const favoriteDish = favoriteDishId ? dishes.find(d => d.id === parseInt(favoriteDishId)) : null;

  // Generate waste comparison message
  const avgWaste = parseFloat(impact.avgWastePercent);
  let wasteComparison = "";
  if (avgWaste < 10) {
    wasteComparison = "🌟 Amazing! You're a waste reduction champion!";
  } else if (avgWaste < 18.5) {
    wasteComparison = "👏 Great job! You're better than the school average!";
  } else {
    wasteComparison = "📈 There's room for improvement - let's work on it together!";
  }

  // Generate encouragement message
  const encouragements = [
    "Keep up the fantastic work!",
    "You're making a real difference!",
    "Every meal logged helps reduce waste!",
    "Your efforts are saving the planet!"
  ];
  const encouragement = encouragements[Math.floor(Math.random() * encouragements.length)];

  // Portion advice based on waste
  let portionAdvice = "";
  if (avgWaste < 10) {
    portionAdvice = "your portions are perfect!";
  } else if (avgWaste < 20) {
    portionAdvice = "portions might be slightly large sometimes.";
  } else {
    portionAdvice = "you might want to start with smaller portions.";
  }

  // Today's recommendation
  const today = getTodayName();
  const todaysDishes = getDishesForDay(today);
  const todayRecommendation = todaysDishes.map(d =>
    `• ${d.emoji} ${d.name_vi} (${d.nutrition.calories} cal, ${d.nutrition.protein}g protein)`
  ).join('\n');

  // Personalized suggestion based on history
  const personalizedSuggestion = favoriteDish
    ? `${favoriteDish.name_vi} - you always rate it highly!`
    : "trying a variety of dishes to find your favorites!";

  // Waste advice based on patterns
  let wasteAdvice = "";
  if (avgWaste < 10) {
    wasteAdvice = "You're already doing amazing! Keep it up! 🌟";
  } else if (avgWaste < 20) {
    wasteAdvice = "You're doing well! Try taking slightly smaller initial portions.";
  } else {
    wasteAdvice = "Consider starting with half portions and getting seconds if still hungry.";
  }

  return template
    .replace(/{name}/g, studentData.name || 'Student')
    .replace(/{mealsLogged}/g, impact.mealsLogged)
    .replace(/{avgWaste}/g, impact.avgWastePercent)
    .replace(/{co2Saved}/g, impact.co2Saved)
    .replace(/{waterSaved}/g, impact.waterSaved)
    .replace(/{landSaved}/g, impact.landSaved)
    .replace(/{wasteComparison}/g, wasteComparison)
    .replace(/{encouragement}/g, encouragement)
    .replace(/{portionAdvice}/g, portionAdvice)
    .replace(/{todayRecommendation}/g, todayRecommendation)
    .replace(/{personalizedSuggestion}/g, personalizedSuggestion)
    .replace(/{wasteAdvice}/g, wasteAdvice)
    .replace(/{userFavorite}/g, favoriteDish ? `${favoriteDish.emoji} ${favoriteDish.name_vi}` : 'various dishes');
};

// Get contextual follow-up based on last intent
const getContextualFollowUp = () => {
  if (!conversationContext.lastIntent) {
    return "Is there anything else you'd like to know?";
  }

  const contextKey = {
    'nutrition_general': 'after_nutrition',
    'calories': 'after_nutrition',
    'protein': 'after_nutrition',
    'weight_loss': 'after_nutrition',
    'dish_specific': 'after_dish',
    'personal_stats': 'after_stats',
    'waste_advice': 'after_waste'
  }[conversationContext.lastIntent] || 'after_nutrition';

  const followUps = contextFollowUps[contextKey] || [];
  return followUps[Math.floor(Math.random() * followUps.length)] || "Anything else you'd like to know?";
};

// Generate response based on intent
export const generateResponse = (message, studentData) => {
  const { intent, dish } = detectIntent(message);
  conversationContext.messageCount++;

  // Handle dish-specific queries
  if (intent === 'dish_specific' && dish) {
    conversationContext.lastIntent = 'dish_specific';
    conversationContext.lastDish = dish;
    return getDishNutritionResponse(dish, studentData);
  }

  // Handle contextual "yes" responses
  if (intent === 'yes_continue') {
    const followUp = getContextualFollowUp();

    // Generate a helpful follow-up based on last context
    if (conversationContext.lastIntent === 'dish_specific' && conversationContext.lastDish) {
      // Suggest similar dishes or alternatives
      const lastDish = conversationContext.lastDish;
      const similarDishes = dishes
        .filter(d => d.id !== lastDish.id && Math.abs(d.nutrition.calories - lastDish.nutrition.calories) < 150)
        .slice(0, 3);

      if (similarDishes.length > 0) {
        return `Here are similar options to ${lastDish.name_vi}:\n\n` +
          similarDishes.map(d => `${d.emoji} ${d.name_vi} - ${d.nutrition.calories} cal`).join('\n') +
          `\n\nWant details on any of these?`;
      }
    }

    return "Here's what else I can help with:\n\n" +
      "• 📊 Your personal stats and impact\n" +
      "• 🍽️ Today's menu recommendations\n" +
      "• 💪 High protein options\n" +
      "• 🌱 Waste reduction tips\n\nJust ask!";
  }

  // Handle regular intents
  if (intent !== 'fallback' && intents[intent]) {
    conversationContext.lastIntent = intent;
    const responses = intents[intent].responses;
    let response = responses[Math.floor(Math.random() * responses.length)];

    // Handle special contextual follow-up placeholder
    if (response.includes('{contextualFollowUp}')) {
      response = getContextualFollowUp();
    }

    return replaceVariables(response, studentData);
  }

  // Fallback response
  conversationContext.lastIntent = null;
  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
};

// Reset conversation context (e.g., when clearing chat)
export const resetContext = () => {
  conversationContext = {
    lastIntent: null,
    lastDish: null,
    messageCount: 0,
    topics: []
  };
};

// Get a greeting message for new conversations
export const getGreeting = (studentName) => {
  const greetings = [
    `Hi ${studentName}! 👋 I'm your AI nutritionist. Ask me about nutrition, meal planning, or reducing food waste!`,
    `Welcome back, ${studentName}! 🥗 Ready to chat about healthy eating?`,
    `Hello ${studentName}! I'm here to help with nutrition questions and waste reduction tips. What's on your mind?`
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
};
