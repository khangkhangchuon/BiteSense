// Mock Data for BiteSense Admin Demo
// School: Wellspring International School, Ho Chi Minh City, Vietnam

export const schoolData = {
  id: "wellspring-hcm",
  name: "Wellspring International School",
  location: "Ho Chi Minh City, Vietnam",
  total_students: 450,
  active_students: 387,
  baseline_waste_rate: 32.0,
  current_waste_rate: 18.5,
  target_waste_rate: 15.0,
  monthly_food_budget: 48000000, // VND
  monthly_savings: 9000000, // VND
  start_date: "2024-09-01"
};

export const dishes = [
  {
    id: 1,
    name_vi: "Phở Bò",
    name_en: "Beef Noodle Soup",
    category: "main",
    portion_size: 350,
    cost_per_serving: 35000,
    nutrition: { calories: 450, protein: 25, carbs: 60, fat: 12 },
    waste_rate: 12.3,
    rating: 4.5,
    total_ratings: 234,
    trend: "stable"
  },
  {
    id: 2,
    name_vi: "Cơm Tấm",
    name_en: "Broken Rice with Grilled Pork",
    category: "main",
    portion_size: 400,
    cost_per_serving: 30000,
    nutrition: { calories: 620, protein: 28, carbs: 75, fat: 22 },
    waste_rate: 25.6,
    rating: 3.8,
    total_ratings: 198,
    trend: "down"
  },
  {
    id: 3,
    name_vi: "Bún Chả",
    name_en: "Grilled Pork with Noodles",
    category: "main",
    portion_size: 380,
    cost_per_serving: 32000,
    nutrition: { calories: 520, protein: 30, carbs: 55, fat: 18 },
    waste_rate: 15.2,
    rating: 4.3,
    total_ratings: 187,
    trend: "up"
  },
  {
    id: 4,
    name_vi: "Bánh Mì Thịt",
    name_en: "Vietnamese Sandwich",
    category: "main",
    portion_size: 250,
    cost_per_serving: 25000,
    nutrition: { calories: 380, protein: 18, carbs: 45, fat: 14 },
    waste_rate: 8.5,
    rating: 4.7,
    total_ratings: 256,
    trend: "stable"
  },
  {
    id: 5,
    name_vi: "Gỏi Cuốn",
    name_en: "Fresh Spring Rolls",
    category: "appetizer",
    portion_size: 180,
    cost_per_serving: 20000,
    nutrition: { calories: 180, protein: 12, carbs: 25, fat: 4 },
    waste_rate: 22.1,
    rating: 3.6,
    total_ratings: 145,
    trend: "down"
  },
  {
    id: 6,
    name_vi: "Cơm Chiên Dương Châu",
    name_en: "Yangzhou Fried Rice",
    category: "main",
    portion_size: 350,
    cost_per_serving: 28000,
    nutrition: { calories: 550, protein: 18, carbs: 70, fat: 20 },
    waste_rate: 14.8,
    rating: 4.2,
    total_ratings: 176,
    trend: "up"
  },
  {
    id: 7,
    name_vi: "Bún Bò Huế",
    name_en: "Spicy Beef Noodle Soup",
    category: "main",
    portion_size: 400,
    cost_per_serving: 38000,
    nutrition: { calories: 480, protein: 28, carbs: 55, fat: 15 },
    waste_rate: 28.4,
    rating: 3.2,
    total_ratings: 134,
    trend: "down"
  },
  {
    id: 8,
    name_vi: "Xôi Gà",
    name_en: "Sticky Rice with Chicken",
    category: "main",
    portion_size: 300,
    cost_per_serving: 26000,
    nutrition: { calories: 420, protein: 22, carbs: 60, fat: 10 },
    waste_rate: 11.2,
    rating: 4.4,
    total_ratings: 189,
    trend: "stable"
  },
  {
    id: 9,
    name_vi: "Chả Giò",
    name_en: "Fried Spring Rolls",
    category: "appetizer",
    portion_size: 150,
    cost_per_serving: 18000,
    nutrition: { calories: 280, protein: 14, carbs: 22, fat: 16 },
    waste_rate: 9.8,
    rating: 4.6,
    total_ratings: 221,
    trend: "up"
  },
  {
    id: 10,
    name_vi: "Canh Chua Cá",
    name_en: "Sour Fish Soup",
    category: "soup",
    portion_size: 280,
    cost_per_serving: 32000,
    nutrition: { calories: 220, protein: 24, carbs: 15, fat: 8 },
    waste_rate: 19.5,
    rating: 3.9,
    total_ratings: 156,
    trend: "stable"
  },
  {
    id: 11,
    name_vi: "Mì Xào Bò",
    name_en: "Stir-fried Noodles with Beef",
    category: "main",
    portion_size: 350,
    cost_per_serving: 34000,
    nutrition: { calories: 520, protein: 26, carbs: 58, fat: 18 },
    waste_rate: 13.6,
    rating: 4.3,
    total_ratings: 167,
    trend: "up"
  },
  {
    id: 12,
    name_vi: "Cháo Gà",
    name_en: "Chicken Rice Porridge",
    category: "main",
    portion_size: 350,
    cost_per_serving: 22000,
    nutrition: { calories: 280, protein: 18, carbs: 40, fat: 6 },
    waste_rate: 16.7,
    rating: 4.0,
    total_ratings: 143,
    trend: "stable"
  }
];

// Generate 3 months of historical data (Sep 1 - Dec 26, 2024)
const generateHistoricalData = () => {
  const data = [];
  const startDate = new Date('2024-09-01');
  const endDate = new Date('2024-12-26');

  let baseWaste = 32.0;
  const targetWaste = 18.5;
  const totalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
  const dailyReduction = (baseWaste - targetWaste) / totalDays;

  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    const dayIndex = Math.floor((d - startDate) / (1000 * 60 * 60 * 24));
    const expectedWaste = baseWaste - (dailyReduction * dayIndex);
    // Add some random variation
    const variation = (Math.random() - 0.5) * 4;
    const wasteRate = Math.max(10, Math.min(35, expectedWaste + variation));

    data.push({
      date: d.toISOString().split('T')[0],
      waste_rate: parseFloat(wasteRate.toFixed(1)),
      meals_served: Math.floor(350 + Math.random() * 50),
      cost: Math.floor(1400000 + Math.random() * 200000)
    });
  }

  return data;
};

export const historicalData = generateHistoricalData();

// Weekly aggregated data for chart
export const weeklyData = [
  { week: "Sep W1", waste_rate: 31.5, meals: 1750 },
  { week: "Sep W2", waste_rate: 30.8, meals: 1680 },
  { week: "Sep W3", waste_rate: 29.2, meals: 1720 },
  { week: "Sep W4", waste_rate: 28.5, meals: 1690 },
  { week: "Oct W1", waste_rate: 27.1, meals: 1710 },
  { week: "Oct W2", waste_rate: 26.3, meals: 1740 },
  { week: "Oct W3", waste_rate: 24.8, meals: 1680 },
  { week: "Oct W4", waste_rate: 23.5, meals: 1750 },
  { week: "Nov W1", waste_rate: 22.4, meals: 1720 },
  { week: "Nov W2", waste_rate: 21.2, meals: 1690 },
  { week: "Nov W3", waste_rate: 20.5, meals: 1710 },
  { week: "Nov W4", waste_rate: 19.8, meals: 1735 },
  { week: "Dec W1", waste_rate: 19.2, meals: 1700 },
  { week: "Dec W2", waste_rate: 18.9, meals: 1720 },
  { week: "Dec W3", waste_rate: 18.6, meals: 1680 },
  { week: "Dec W4", waste_rate: 18.5, meals: 1450 }
];

export const recommendations = [
  {
    id: 1,
    dish_id: 2,
    dish_name: "Cơm Tấm",
    dish_name_en: "Broken Rice with Grilled Pork",
    issue: "High waste rate (25.6%) - primary reason: portion too large",
    suggestion: "Reduce portion size from 400g to 320g",
    projected_waste_reduction: "25.6% → 12%",
    projected_savings: 185000, // VND per week
    confidence: 0.89,
    status: "pending",
    created_at: "2024-12-20"
  },
  {
    id: 2,
    dish_id: 7,
    dish_name: "Bún Bò Huế",
    dish_name_en: "Spicy Beef Noodle Soup",
    issue: "Low rating (3.2/5) and high waste (28.4%) - students report 'too spicy'",
    suggestion: "Offer mild version alongside regular, or reduce spice level by 30%",
    projected_waste_reduction: "28.4% → 15%",
    projected_savings: 210000, // VND per week
    confidence: 0.85,
    status: "pending",
    created_at: "2024-12-18"
  },
  {
    id: 3,
    dish_id: 5,
    dish_name: "Gỏi Cuốn",
    dish_name_en: "Fresh Spring Rolls",
    issue: "High waste (22.1%) - students report 'gets soggy' and 'not filling enough'",
    suggestion: "Serve with dipping sauce on the side, pair with a small rice portion",
    projected_waste_reduction: "22.1% → 10%",
    projected_savings: 95000, // VND per week
    confidence: 0.78,
    status: "pending",
    created_at: "2024-12-22"
  },
  {
    id: 4,
    dish_id: 4,
    dish_name: "Bánh Mì Thịt",
    dish_name_en: "Vietnamese Sandwich",
    issue: "Already performing well (8.5% waste, 4.7★ rating)",
    suggestion: "Increase serving frequency from 1x to 2x per week",
    projected_waste_reduction: "N/A - optimize menu mix",
    projected_savings: 120000, // VND per week through efficiency
    confidence: 0.92,
    status: "accepted",
    implemented_at: "2024-12-15",
    result: "Menu updated - now served Monday & Thursday"
  },
  {
    id: 5,
    dish_id: 1,
    dish_name: "Phở Bò",
    dish_name_en: "Beef Noodle Soup",
    issue: "Slightly high portion for younger students (grades 6-8)",
    suggestion: "Offer 'regular' (350g) and 'small' (280g) options",
    projected_waste_reduction: "12.3% → 8%",
    projected_savings: 75000,
    confidence: 0.82,
    status: "accepted",
    implemented_at: "2024-12-10",
    result: "Waste dropped to 9.2% after implementation"
  }
];

export const environmentalImpact = {
  total_co2_prevented: 1240, // kg since start
  total_water_saved: 8500, // liters
  total_land_saved: 35, // m²
  meals_rescued: 2890,
  trees_equivalent: 12,
  // Monthly breakdown
  this_month: {
    co2_prevented: 320,
    water_saved: 2200,
    land_saved: 9,
    meals_rescued: 745
  }
};

export const weeklyMenu = {
  "Monday": [1, 4, 9], // Phở Bò, Bánh Mì, Chả Giò
  "Tuesday": [2, 6, 10], // Cơm Tấm, Cơm Chiên, Canh Chua
  "Wednesday": [3, 8, 5], // Bún Chả, Xôi Gà, Gỏi Cuốn
  "Thursday": [4, 11, 9], // Bánh Mì, Mì Xào Bò, Chả Giò
  "Friday": [7, 12, 6] // Bún Bò Huế, Cháo Gà, Cơm Chiên
};

export const studentEngagement = {
  participation_rate: 86, // percentage
  daily_ratings_avg: 245,
  daily_waste_logs_avg: 312,
  streak_users: 45, // students with 7+ day logging streak
  top_contributors: [
    { id: "STU001", logs: 78, avg_waste: 5.2 },
    { id: "STU002", logs: 72, avg_waste: 8.1 },
    { id: "STU003", logs: 68, avg_waste: 6.5 },
    { id: "STU004", logs: 65, avg_waste: 7.8 },
    { id: "STU005", logs: 62, avg_waste: 4.9 }
  ]
};

// Helper functions
export const getDishById = (id) => dishes.find(d => d.id === id);

export const getTopRatedDishes = (limit = 5) =>
  [...dishes].sort((a, b) => b.rating - a.rating).slice(0, limit);

export const getMostWastedDishes = (limit = 5) =>
  [...dishes].sort((a, b) => b.waste_rate - a.waste_rate).slice(0, limit);

export const getLeastWastedDishes = (limit = 5) =>
  [...dishes].sort((a, b) => a.waste_rate - b.waste_rate).slice(0, limit);

export const getPendingRecommendations = () =>
  recommendations.filter(r => r.status === "pending");

export const getAcceptedRecommendations = () =>
  recommendations.filter(r => r.status === "accepted");

export const formatVND = (amount) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);

export const formatPercent = (value) => `${value.toFixed(1)}%`;
