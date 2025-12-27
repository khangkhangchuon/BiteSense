// Mock Data for BiteSense Student Demo
// Demo student at Wellspring International School

export const studentProfile = {
  id: "demo-student",
  name: "Demo Student",
  grade: "Grade 10",
  school: "Wellspring International School",
  joinedDate: "2024-09-01"
};

export const dishes = [
  {
    id: 1,
    name_vi: "Phở Bò",
    name_en: "Beef Noodle Soup",
    emoji: "🍜",
    category: "main",
    portion_size: 350,
    nutrition: { calories: 450, protein: 25, carbs: 60, fat: 12 },
    rating: 4.5,
    total_ratings: 234,
    description: "Traditional Vietnamese beef noodle soup with rice noodles, tender beef slices, and aromatic herbs."
  },
  {
    id: 2,
    name_vi: "Cơm Tấm",
    name_en: "Broken Rice with Grilled Pork",
    emoji: "🍚",
    category: "main",
    portion_size: 400,
    nutrition: { calories: 620, protein: 28, carbs: 75, fat: 22 },
    rating: 3.8,
    total_ratings: 198,
    description: "Broken rice served with grilled pork chop, fried egg, and pickled vegetables."
  },
  {
    id: 3,
    name_vi: "Bún Chả",
    name_en: "Grilled Pork with Noodles",
    emoji: "🥢",
    category: "main",
    portion_size: 380,
    nutrition: { calories: 520, protein: 30, carbs: 55, fat: 18 },
    rating: 4.3,
    total_ratings: 187,
    description: "Grilled pork patties and slices served with rice vermicelli and dipping sauce."
  },
  {
    id: 4,
    name_vi: "Bánh Mì Thịt",
    name_en: "Vietnamese Sandwich",
    emoji: "🥖",
    category: "main",
    portion_size: 250,
    nutrition: { calories: 380, protein: 18, carbs: 45, fat: 14 },
    rating: 4.7,
    total_ratings: 256,
    description: "Crispy baguette filled with grilled pork, pâté, pickled vegetables, and fresh herbs."
  },
  {
    id: 5,
    name_vi: "Gỏi Cuốn",
    name_en: "Fresh Spring Rolls",
    emoji: "🥗",
    category: "appetizer",
    portion_size: 180,
    nutrition: { calories: 180, protein: 12, carbs: 25, fat: 4 },
    rating: 3.6,
    total_ratings: 145,
    description: "Fresh rice paper rolls with shrimp, pork, vegetables, and herbs. Served with peanut sauce."
  },
  {
    id: 6,
    name_vi: "Cơm Chiên Dương Châu",
    name_en: "Yangzhou Fried Rice",
    emoji: "🍳",
    category: "main",
    portion_size: 350,
    nutrition: { calories: 550, protein: 18, carbs: 70, fat: 20 },
    rating: 4.2,
    total_ratings: 176,
    description: "Classic fried rice with shrimp, char siu pork, eggs, and vegetables."
  },
  {
    id: 7,
    name_vi: "Bún Bò Huế",
    name_en: "Spicy Beef Noodle Soup",
    emoji: "🌶️",
    category: "main",
    portion_size: 400,
    nutrition: { calories: 480, protein: 28, carbs: 55, fat: 15 },
    rating: 3.2,
    total_ratings: 134,
    description: "Spicy beef noodle soup from Huế with lemongrass, shrimp paste, and chili oil."
  },
  {
    id: 8,
    name_vi: "Xôi Gà",
    name_en: "Sticky Rice with Chicken",
    emoji: "🍗",
    category: "main",
    portion_size: 300,
    nutrition: { calories: 420, protein: 22, carbs: 60, fat: 10 },
    rating: 4.4,
    total_ratings: 189,
    description: "Glutinous sticky rice topped with shredded chicken, fried shallots, and chicken broth."
  },
  {
    id: 9,
    name_vi: "Chả Giò",
    name_en: "Fried Spring Rolls",
    emoji: "🥟",
    category: "appetizer",
    portion_size: 150,
    nutrition: { calories: 280, protein: 14, carbs: 22, fat: 16 },
    rating: 4.6,
    total_ratings: 221,
    description: "Crispy fried spring rolls filled with pork, mushrooms, and vegetables."
  },
  {
    id: 10,
    name_vi: "Mì Xào Bò",
    name_en: "Stir-fried Noodles with Beef",
    emoji: "🍝",
    category: "main",
    portion_size: 350,
    nutrition: { calories: 520, protein: 26, carbs: 58, fat: 18 },
    rating: 4.3,
    total_ratings: 167,
    description: "Egg noodles stir-fried with tender beef slices, vegetables, and savory sauce."
  }
];

// Weekly menu - maps days to dish IDs
export const weeklyMenu = {
  "Monday": [1, 4, 9],
  "Tuesday": [2, 6, 5],
  "Wednesday": [3, 8, 9],
  "Thursday": [4, 10, 5],
  "Friday": [7, 6, 9]
};

// Get today's day name
export const getTodayName = () => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay();
  // For demo, if weekend, show Monday's menu
  return days[today] === "Sunday" || days[today] === "Saturday" ? "Monday" : days[today];
};

// Get dishes for a specific day
export const getDishesForDay = (day) => {
  const dishIds = weeklyMenu[day] || weeklyMenu["Monday"];
  return dishIds.map(id => dishes.find(d => d.id === id));
};

// Demo student's historical logs (past 3 weeks)
export const studentLogs = [
  { date: "2024-12-09", dish_id: 1, rating: 5, waste_percent: 0 },
  { date: "2024-12-09", dish_id: 4, rating: 5, waste_percent: 5 },
  { date: "2024-12-10", dish_id: 2, rating: 4, waste_percent: 15 },
  { date: "2024-12-10", dish_id: 6, rating: 4, waste_percent: 10 },
  { date: "2024-12-11", dish_id: 3, rating: 5, waste_percent: 0 },
  { date: "2024-12-11", dish_id: 8, rating: 4, waste_percent: 5 },
  { date: "2024-12-12", dish_id: 4, rating: 5, waste_percent: 0 },
  { date: "2024-12-12", dish_id: 10, rating: 4, waste_percent: 10 },
  { date: "2024-12-13", dish_id: 7, rating: 3, waste_percent: 25 },
  { date: "2024-12-13", dish_id: 6, rating: 4, waste_percent: 5 },
  { date: "2024-12-16", dish_id: 1, rating: 5, waste_percent: 0 },
  { date: "2024-12-16", dish_id: 9, rating: 5, waste_percent: 0 },
  { date: "2024-12-17", dish_id: 2, rating: 3, waste_percent: 20 },
  { date: "2024-12-17", dish_id: 5, rating: 4, waste_percent: 15 },
  { date: "2024-12-18", dish_id: 3, rating: 5, waste_percent: 5 },
  { date: "2024-12-18", dish_id: 8, rating: 5, waste_percent: 0 },
  { date: "2024-12-19", dish_id: 4, rating: 5, waste_percent: 0 },
  { date: "2024-12-19", dish_id: 10, rating: 4, waste_percent: 5 },
  { date: "2024-12-20", dish_id: 7, rating: 2, waste_percent: 35 },
  { date: "2024-12-20", dish_id: 9, rating: 5, waste_percent: 0 },
  { date: "2024-12-23", dish_id: 1, rating: 5, waste_percent: 0 },
  { date: "2024-12-23", dish_id: 4, rating: 5, waste_percent: 0 },
  { date: "2024-12-24", dish_id: 2, rating: 4, waste_percent: 10 },
  { date: "2024-12-24", dish_id: 6, rating: 5, waste_percent: 5 },
  { date: "2024-12-25", dish_id: 3, rating: 5, waste_percent: 0 },
  { date: "2024-12-26", dish_id: 4, rating: 5, waste_percent: 0 },
];

// Waste reason options
export const wasteReasons = [
  { id: "portion_large", label: "Portion too large", emoji: "📏" },
  { id: "not_hungry", label: "Not hungry", emoji: "😐" },
  { id: "taste", label: "Didn't like the taste", emoji: "😕" },
  { id: "too_spicy", label: "Too spicy", emoji: "🌶️" },
  { id: "too_cold", label: "Food got cold", emoji: "🥶" },
  { id: "texture", label: "Didn't like texture", emoji: "🤔" },
  { id: "other", label: "Other reason", emoji: "💭" }
];

// Environmental impact conversion factors
export const impactFactors = {
  co2PerKgWaste: 2.5, // kg CO2 per kg food waste
  waterPerKgWaste: 170, // liters water per kg food waste
  landPerKgWaste: 0.4, // m² land per kg food waste
  avgMealWeight: 0.35 // kg average meal weight
};

// Calculate environmental impact from waste logs
export const calculateImpact = (logs) => {
  const totalMeals = logs.length;
  const totalWastePercent = logs.reduce((sum, log) => sum + log.waste_percent, 0);
  const avgWaste = totalMeals > 0 ? totalWastePercent / totalMeals : 0;

  // Calculate food saved (assuming avg meal is 350g)
  const avgMealKg = impactFactors.avgMealWeight;
  const potentialWasteKg = totalMeals * avgMealKg * 0.3; // Baseline 30% waste
  const actualWasteKg = totalMeals * avgMealKg * (avgWaste / 100);
  const savedKg = Math.max(0, potentialWasteKg - actualWasteKg);

  return {
    mealsLogged: totalMeals,
    avgWastePercent: avgWaste.toFixed(1),
    co2Saved: (savedKg * impactFactors.co2PerKgWaste).toFixed(1),
    waterSaved: Math.round(savedKg * impactFactors.waterPerKgWaste),
    landSaved: (savedKg * impactFactors.landPerKgWaste).toFixed(2),
    foodSavedKg: savedKg.toFixed(2)
  };
};

// Calculate streak (consecutive days with <10% waste)
export const calculateStreak = (logs) => {
  if (logs.length === 0) return 0;

  // Group logs by date and get avg waste per day
  const dailyWaste = {};
  logs.forEach(log => {
    if (!dailyWaste[log.date]) {
      dailyWaste[log.date] = { total: 0, count: 0 };
    }
    dailyWaste[log.date].total += log.waste_percent;
    dailyWaste[log.date].count += 1;
  });

  // Sort dates descending
  const dates = Object.keys(dailyWaste).sort().reverse();

  let streak = 0;
  for (const date of dates) {
    const avgWaste = dailyWaste[date].total / dailyWaste[date].count;
    if (avgWaste <= 10) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
};

// Get comparison analogies based on impact
export const getAnalogies = (impact) => {
  const analogies = [];

  const water = parseFloat(impact.waterSaved);
  if (water >= 150) {
    analogies.push(`💧 You saved enough water to fill ${Math.round(water / 150)} bathtubs!`);
  } else if (water >= 50) {
    analogies.push(`💧 You saved enough water for ${Math.round(water / 10)} showers!`);
  }

  const co2 = parseFloat(impact.co2Saved);
  if (co2 >= 5) {
    analogies.push(`🌳 Your CO₂ savings = planting ${(co2 / 10).toFixed(1)} trees!`);
  } else if (co2 >= 1) {
    analogies.push(`🚗 You prevented ${co2.toFixed(1)}kg of CO₂ - like not driving ${Math.round(co2 * 4)}km!`);
  }

  const meals = impact.mealsLogged;
  if (meals >= 20) {
    analogies.push(`🍽️ You've logged ${meals} meals - you're a tracking champion!`);
  } else if (meals >= 10) {
    analogies.push(`⭐ ${meals} meals logged - keep up the great work!`);
  }

  return analogies;
};

// Helper to get dish by ID
export const getDishById = (id) => dishes.find(d => d.id === id);
