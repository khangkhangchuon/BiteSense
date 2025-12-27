// AI Nutritionist Chatbot Knowledge Base
// Contains intents, responses, and keyword mappings

import { dishes } from './mockData';

// Map dish name variations to dish IDs
export const dishKeywords = {
  // Phở Bò
  "phở": 1, "pho": 1, "phở bò": 1, "pho bo": 1, "beef noodle": 1, "noodle soup": 1,
  // Cơm Tấm
  "cơm tấm": 2, "com tam": 2, "broken rice": 2,
  // Bún Chả
  "bún chả": 3, "bun cha": 3, "grilled pork noodle": 3,
  // Bánh Mì
  "bánh mì": 4, "banh mi": 4, "sandwich": 4, "vietnamese sandwich": 4,
  // Gỏi Cuốn
  "gỏi cuốn": 5, "goi cuon": 5, "spring roll": 5, "fresh roll": 5,
  // Cơm Chiên
  "cơm chiên": 6, "com chien": 6, "fried rice": 6,
  // Bún Bò Huế
  "bún bò huế": 7, "bun bo hue": 7, "spicy noodle": 7, "hue": 7,
  // Xôi Gà
  "xôi": 8, "xoi": 8, "sticky rice": 8, "xôi gà": 8,
  // Chả Giò
  "chả giò": 9, "cha gio": 9, "fried spring roll": 9, "egg roll": 9,
  // Mì Xào
  "mì xào": 10, "mi xao": 10, "stir fried noodle": 10, "stir-fried": 10
};

// Intent definitions with keywords and response templates
export const intents = {
  greeting: {
    keywords: ["hi", "hello", "hey", "good morning", "good afternoon", "howdy", "greetings"],
    responses: [
      "Hi {name}! 👋 I'm your AI nutritionist. Ask me anything about nutrition, meal planning, or reducing food waste!",
      "Hello {name}! Ready to help you eat healthier and reduce waste. What would you like to know?",
      "Hey there! 🥗 I'm here to answer your nutrition questions. What's on your mind?"
    ]
  },

  thanks: {
    keywords: ["thank", "thanks", "thx", "appreciate", "helpful"],
    responses: [
      "You're welcome, {name}! Let me know if you have more questions. 😊",
      "Happy to help! Remember, every bite matters for your health and the planet! 🌱",
      "Anytime! Keep up the great work with your healthy eating habits!"
    ]
  },

  goodbye: {
    keywords: ["bye", "goodbye", "see you", "gotta go", "later"],
    responses: [
      "Goodbye {name}! Remember to log your meals today! 👋",
      "See you later! Keep making those healthy choices! 🥗",
      "Bye! Check back anytime you have nutrition questions!"
    ]
  },

  personal_stats: {
    keywords: ["my stats", "how am i doing", "my progress", "my impact", "my data", "how did i do"],
    responses: [
      "Great question! 📊 Looking at your data:\n\n• Meals logged: {mealsLogged}\n• Average waste: {avgWaste}%\n• School average: 18.5%\n\n{wasteComparison}\n\nYou've saved {co2Saved}kg of CO₂ and {waterSaved}L of water! 🌍",
      "Here's your impact summary, {name}:\n\n🍽️ {mealsLogged} meals tracked\n📉 {avgWaste}% average waste\n🌍 {co2Saved}kg CO₂ prevented\n💧 {waterSaved}L water saved\n\n{encouragement}"
    ]
  },

  nutrition_general: {
    keywords: ["nutrition", "nutritious", "healthy", "healthier", "diet", "eating well", "eat better"],
    responses: [
      "For healthy eating at the cafeteria, I recommend:\n\n1. 🍜 Phở Bò - High protein, lower fat (450 cal)\n2. 🥖 Bánh Mì - Balanced macros (380 cal)\n3. 🥗 Gỏi Cuốn - Light and fresh (180 cal)\n\nWould you like specific nutrition info on any dish?",
      "Great that you're thinking about nutrition! The Vietnamese dishes here are generally healthy. Key tips:\n\n• Choose soup-based dishes for lower calories\n• Spring rolls are great for vitamins\n• Watch portion sizes on rice dishes\n\nWhat specific nutrition goal do you have?"
    ]
  },

  calories: {
    keywords: ["calorie", "calories", "kcal", "low calorie", "how many calories"],
    responses: [
      "Here are the dishes ranked by calories:\n\n🥇 Gỏi Cuốn - 180 kcal (lowest!)\n🥈 Chả Giò - 280 kcal\n🥉 Bánh Mì - 380 kcal\n🍜 Phở Bò - 450 kcal\n🍚 Cơm Tấm - 620 kcal (highest)\n\nFor weight management, I'd suggest the spring rolls or Phở!",
      "Calorie-conscious? Good thinking! 📊\n\nLightest options:\n• Gỏi Cuốn: 180 kcal\n• Bánh Mì: 380 kcal\n• Phở: 450 kcal\n\nHeavier options (watch portions!):\n• Cơm Chiên: 550 kcal\n• Cơm Tấm: 620 kcal"
    ]
  },

  protein: {
    keywords: ["protein", "muscle", "gains", "building muscle", "high protein", "workout"],
    responses: [
      "Looking for protein? 💪 Here are the best options:\n\n1. Bún Chả - 30g protein\n2. Cơm Tấm - 28g protein\n3. Bún Bò Huế - 28g protein\n4. Mì Xào Bò - 26g protein\n5. Phở Bò - 25g protein\n\nAll great for building muscle!",
      "For muscle building, protein is key! Top picks:\n\n🥇 Bún Chả (30g) - Grilled pork power!\n🥈 Phở Bò (25g) - Classic and protein-rich\n🥉 Xôi Gà (22g) - Chicken on sticky rice\n\nPair with vegetables for complete nutrition!"
    ]
  },

  weight_loss: {
    keywords: ["lose weight", "weight loss", "slim", "diet", "cutting", "fat loss", "losing weight"],
    responses: [
      "For weight loss, focus on these lower-calorie, high-protein options:\n\n✅ Phở Bò (450 cal, 25g protein) - Filling soup!\n✅ Gỏi Cuốn (180 cal) - Super light\n✅ Bánh Mì (380 cal) - Satisfying sandwich\n\n❌ Limit: Cơm Tấm, Fried Rice (higher calories)\n\nAlso, logging your waste helps you understand portions better!",
      "Weight loss tips for the cafeteria:\n\n1. Choose soup-based dishes (more filling, fewer calories)\n2. Start with Gỏi Cuốn appetizer\n3. Ask for less rice/noodles if portions feel big\n4. Avoid fried options when possible\n\nYour current avg waste of {avgWaste}% suggests {portionAdvice}"
    ]
  },

  waste_advice: {
    keywords: ["waste", "reduce waste", "throwing away", "leftover", "too much food", "portion"],
    responses: [
      "Great question about reducing waste! 🌱\n\nYour stats: {avgWaste}% average waste\nSchool average: 18.5%\n\nTips to reduce further:\n• Take smaller portions initially\n• You can always get seconds!\n• If a dish is consistently wasted, try alternatives\n• Share with friends if portions are too big",
      "Reducing food waste helps the planet! Here's personalized advice:\n\n📊 Your average waste: {avgWaste}%\n\n{wasteAdvice}\n\nRemember: Less waste = less CO₂, water, and land used! Every bite matters! 🌍"
    ]
  },

  meal_planning: {
    keywords: ["what should i eat", "recommend", "suggestion", "what to eat", "meal plan", "tomorrow", "today"],
    responses: [
      "Based on today's menu and your preferences:\n\n🌟 Recommended for you:\n{todayRecommendation}\n\nThis matches your taste (you tend to rate similar dishes highly) and is nutritionally balanced!",
      "Let me suggest some options! 🍽️\n\nFor a balanced meal today:\n• Main: Phở Bò or Bún Chả (high protein)\n• Light option: Gỏi Cuốn + small rice\n• Satisfying: Bánh Mì (grab and go)\n\nBased on your history, you might enjoy {personalizedSuggestion}!"
    ]
  },

  spicy: {
    keywords: ["spicy", "hot", "chili", "spice", "mild", "not spicy"],
    responses: [
      "About spice levels:\n\n🌶️🌶️🌶️ Bún Bò Huế - Very spicy!\n🌶️ Some dishes with optional chili\n\n✅ Mild options:\n• Phở Bò\n• Xôi Gà\n• Gỏi Cuốn\n• Bánh Mì\n\nI noticed Bún Bò Huế has higher waste - the spice might be too much! Try the mild version.",
      "Not a fan of spicy food? No problem!\n\nMild and delicious:\n🍜 Phở Bò - Savory, not spicy\n🍗 Xôi Gà - Gentle flavors\n🥖 Bánh Mì - Customizable heat\n\nAvoid: Bún Bò Huế (quite spicy!)"
    ]
  },

  vegetarian: {
    keywords: ["vegetarian", "vegan", "no meat", "vegetables", "plant based", "veggie"],
    responses: [
      "Looking for vegetarian options? Here's what works:\n\n🥗 Gỏi Cuốn - Can be made veggie!\n🍳 Cơm Chiên - Ask for vegetable fried rice\n\nMost dishes are meat-based, but you can always ask the cafeteria about vegetarian modifications. They're usually happy to help! 🌱"
    ]
  },

  favorite_dish: {
    keywords: ["favorite", "best dish", "most popular", "what do people like", "top rated"],
    responses: [
      "Based on student ratings, here are the favorites:\n\n🥇 Bánh Mì - 4.7★ (256 ratings)\n🥈 Chả Giò - 4.6★ (221 ratings)\n🥉 Phở Bò - 4.5★ (234 ratings)\n\nAnd your personal favorite seems to be {userFavorite}! Great taste! 😋",
      "The most loved dishes at the cafeteria:\n\n⭐ Bánh Mì (4.7★) - Everyone loves it!\n⭐ Chả Giò (4.6★) - Crispy goodness\n⭐ Phở Bò (4.5★) - Classic comfort\n\nLeast popular: Bún Bò Huế (3.2★) - too spicy for many!"
    ]
  },

  yes_continue: {
    keywords: ["yes", "yeah", "sure", "okay", "ok", "yep", "please", "tell me more", "go on"],
    responses: [
      "{contextualFollowUp}"
    ]
  },

  no_thanks: {
    keywords: ["no", "nope", "not really", "i'm good", "that's all"],
    responses: [
      "No problem! Let me know if you have other questions. Happy eating! 🥗",
      "Alright! I'm here whenever you need nutrition advice. Enjoy your meal!",
      "Got it! Remember to log your meal and waste later - every bit of data helps! 📊"
    ]
  }
};

// Fallback responses when no intent is matched
export const fallbackResponses = [
  "Hmm, I'm not sure I understand. Could you try asking about:\n\n• Nutrition info for a specific dish\n• Calorie or protein content\n• Tips to reduce food waste\n• Meal recommendations\n\nWhat would you like to know?",
  "I didn't quite catch that! I can help with:\n\n🍽️ Dish nutrition (\"Is phở healthy?\")\n📊 Your stats (\"How am I doing?\")\n🌱 Waste tips (\"How can I reduce waste?\")\n💪 Diet advice (\"High protein options?\")\n\nTry one of these!",
  "Sorry, I'm still learning! Ask me about specific dishes, nutrition goals, or waste reduction and I'll do my best to help! 🤖"
];

// Context-aware follow-up responses
export const contextFollowUps = {
  after_nutrition: [
    "Would you like portion size recommendations too?",
    "Want me to compare this with other dishes?",
    "Should I suggest a balanced meal combination?"
  ],
  after_waste: [
    "Want to see how you compare to other students?",
    "Should I recommend dishes with smaller portions?",
    "Would you like tips for specific dishes?"
  ],
  after_dish: [
    "Want nutrition details for another dish?",
    "Should I suggest similar alternatives?",
    "Would you like to know the best time to eat this?"
  ],
  after_stats: [
    "Want tips to improve your stats?",
    "Should I recommend low-waste dishes?",
    "Would you like to set a waste reduction goal?"
  ]
};

// Get dish by ID helper
export const getDishFromKeyword = (text) => {
  const lowerText = text.toLowerCase();
  for (const [keyword, dishId] of Object.entries(dishKeywords)) {
    if (lowerText.includes(keyword)) {
      return dishes.find(d => d.id === dishId);
    }
  }
  return null;
};

// Generate dish-specific response
export const getDishNutritionResponse = (dish, studentData) => {
  const { name_vi, name_en, emoji, nutrition, rating, portion_size, description } = dish;

  // Check if student has rated this dish
  const studentRatings = studentData?.logs?.filter(log => log.dish_id === dish.id) || [];
  const hasRated = studentRatings.length > 0;
  const avgStudentRating = hasRated
    ? (studentRatings.reduce((sum, log) => sum + log.rating, 0) / studentRatings.length).toFixed(1)
    : null;

  let response = `${emoji} **${name_vi}** (${name_en})\n\n`;
  response += `📊 Nutrition per serving (${portion_size}g):\n`;
  response += `• Calories: ${nutrition.calories} kcal\n`;
  response += `• Protein: ${nutrition.protein}g\n`;
  response += `• Carbs: ${nutrition.carbs}g\n`;
  response += `• Fat: ${nutrition.fat}g\n\n`;
  response += `⭐ Average rating: ${rating}/5\n`;

  if (hasRated) {
    response += `\n💚 You've had this ${studentRatings.length} time(s) and rated it ${avgStudentRating}★ on average!`;
  }

  // Add health tip based on nutrition
  if (nutrition.calories < 400) {
    response += `\n\n💡 Tip: Great low-calorie choice for weight management!`;
  } else if (nutrition.protein > 25) {
    response += `\n\n💡 Tip: Excellent protein source for muscle building!`;
  }

  return response;
};
