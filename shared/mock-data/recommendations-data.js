// AI Recommendations Mock Data
export const recommendations = [
  {
    id: 1,
    dish_id: 2, // Cơm Tấm
    dish_name: "Cơm Tấm (Broken Rice with Grilled Pork)",
    issue: "High waste rate (25.6%) due to oversized portions",
    suggestion: "Reduce portion size from 400g to 320g",
    reasoning: "78 students (65% of waste logs) reported 'portion too large'. Current portion is 20% larger than similar dishes.",
    projected_waste_reduction: "25.6% → 12%",
    projected_savings_weekly: 45000, // VND
    projected_savings_monthly: 180000, // VND
    status: "pending", // pending, accepted, declined, implemented
    confidence: 0.89,
    created_date: "2024-12-20",
    priority: "high", // high, medium, low
    impact: {
      waste_reduction: 13.6,
      cost_savings: 180000,
      student_satisfaction: "+0.5 stars (estimated)",
    }
  },
  {
    id: 2,
    dish_id: 7, // Bún Bò Huế
    dish_name: "Bún Bò Huế (Spicy Beef Noodle Soup)",
    issue: "Low rating (3.9/5) and high waste (22.1%) - students report 'too spicy'",
    suggestion: "Offer spice level options or reduce base spice level by 30%",
    reasoning: "56 students (52% of waste logs) cited 'too spicy'. Rating correlates strongly with spice complaints.",
    projected_waste_reduction: "22.1% → 14%",
    projected_satisfaction_increase: "+0.6 stars",
    projected_savings_weekly: 38000,
    projected_savings_monthly: 152000,
    status: "pending",
    confidence: 0.84,
    created_date: "2024-12-21",
    priority: "high",
    impact: {
      waste_reduction: 8.1,
      cost_savings: 152000,
      student_satisfaction: "+0.6 stars (estimated)",
    }
  },
  {
    id: 3,
    dish_id: 10, // Canh Chua
    dish_name: "Canh Chua Cá (Sweet and Sour Fish Soup)",
    issue: "High waste rate (20.3%) and low rating (3.7/5) - 'too sour' complaints",
    suggestion: "Reduce tamarind/lime by 25% to balance sourness",
    reasoning: "48 students (64% of waste logs) reported 'too sour'. This is the lowest-rated soup dish.",
    projected_waste_reduction: "20.3% → 13%",
    projected_satisfaction_increase: "+0.5 stars",
    projected_savings_weekly: 32000,
    projected_savings_monthly: 128000,
    status: "accepted",
    confidence: 0.81,
    created_date: "2024-12-15",
    implemented_date: "2024-12-18",
    priority: "medium",
    result: "Waste reduced to 14.2% (28% improvement). Rating improved to 4.0/5. Will continue monitoring.",
    impact: {
      waste_reduction: 7.3,
      cost_savings: 128000,
      student_satisfaction: "+0.3 stars (actual)",
    }
  },
  {
    id: 4,
    dish_id: 6, // Cơm Chiên
    dish_name: "Cơm Chiên Dương Châu (Fried Rice)",
    issue: "Moderate waste (19.4%) - portion size and oiliness concerns",
    suggestion: "Reduce portion from 350g to 300g and decrease oil by 15%",
    reasoning: "45 students cited 'portion too large' and 28 cited 'too oily'. Dual intervention recommended.",
    projected_waste_reduction: "19.4% → 11%",
    projected_savings_weekly: 28000,
    projected_savings_monthly: 112000,
    status: "pending",
    confidence: 0.76,
    created_date: "2024-12-22",
    priority: "medium",
    impact: {
      waste_reduction: 8.4,
      cost_savings: 112000,
      student_satisfaction: "+0.4 stars (estimated)",
    }
  },
  {
    id: 5,
    dish_id: 12, // Cơm Sườn
    dish_name: "Cơm Sườn (Pork Chop Rice)",
    issue: "Moderate waste (18.9%) - primarily portion-related",
    suggestion: "Reduce rice portion by 50g (from 390g to 340g)",
    reasoning: "42 students reported portions too large. This dish has the 3rd highest portion size.",
    projected_waste_reduction: "18.9% → 12%",
    projected_savings_weekly: 24000,
    projected_savings_monthly: 96000,
    status: "pending",
    confidence: 0.79,
    created_date: "2024-12-23",
    priority: "low",
    impact: {
      waste_reduction: 6.9,
      cost_savings: 96000,
      student_satisfaction: "+0.2 stars (estimated)",
    }
  },
  {
    id: 6,
    dish_id: 1, // Phở Bò
    dish_name: "Phở Bò (Beef Noodle Soup)",
    issue: "Already performing well (12.3% waste, 4.5★) but can optimize further",
    suggestion: "Maintain current recipe. Consider making this a 2x/week staple.",
    reasoning: "Students love this dish. Low waste, high satisfaction. Good benchmark for other dishes.",
    projected_waste_reduction: "12.3% → 10%",
    projected_savings_weekly: 8000,
    projected_savings_monthly: 32000,
    status: "accepted",
    confidence: 0.92,
    created_date: "2024-12-10",
    implemented_date: "2024-12-16",
    priority: "low",
    result: "Now served twice weekly. Waste remains stable at 12%. Student satisfaction high.",
    impact: {
      waste_reduction: 2.3,
      cost_savings: 32000,
      student_satisfaction: "Maintained 4.5 stars",
    }
  },
];

// Helper function to get recommendations by status
export const getRecommendationsByStatus = (status) => {
  return recommendations.filter(rec => rec.status === status);
};

// Helper function to get pending recommendations sorted by priority
export const getPendingRecommendations = () => {
  const priorityOrder = { high: 1, medium: 2, low: 3 };
  return recommendations
    .filter(rec => rec.status === 'pending')
    .sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
};

// Helper function to get accepted/implemented recommendations
export const getImplementedRecommendations = () => {
  return recommendations.filter(rec =>
    rec.status === 'accepted' || rec.status === 'implemented'
  );
};

// Helper function to get recommendation by dish ID
export const getRecommendationByDishId = (dishId) => {
  return recommendations.find(rec => rec.dish_id === dishId);
};

// Helper function to calculate total potential savings
export const getTotalPotentialSavings = () => {
  return recommendations
    .filter(rec => rec.status === 'pending')
    .reduce((total, rec) => total + rec.projected_savings_monthly, 0);
};

// Helper function to get high-impact recommendations (>10% waste reduction)
export const getHighImpactRecommendations = () => {
  return recommendations.filter(rec =>
    rec.status === 'pending' && rec.impact.waste_reduction > 10
  );
};

export default recommendations;
