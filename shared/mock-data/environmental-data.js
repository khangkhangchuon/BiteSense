// Environmental Impact Mock Data

// Total school environmental impact (since program started)
export const environmentalImpact = {
  total_co2_prevented: 1240, // kg since September 15
  total_water_saved: 8500, // liters
  total_land_saved: 35, // m²
  meals_rescued: 2890, // number of meals saved from waste
  waste_diverted: 4200, // kg of food waste prevented

  // Monthly breakdown
  monthly: {
    current_month: {
      co2_prevented: 420,
      water_saved: 2900,
      land_saved: 12,
      meals_rescued: 980,
    },
    last_month: {
      co2_prevented: 450,
      water_saved: 3100,
      land_saved: 13,
      meals_rescued: 1020,
    },
    two_months_ago: {
      co2_prevented: 370,
      water_saved: 2500,
      land_saved: 10,
      meals_rescued: 890,
    }
  },

  // Comparison analogies for context
  analogies: {
    co2: "Equivalent to planting 62 trees",
    water: "Enough to fill 17 bathtubs",
    land: "Size of a small classroom",
    trees_planted_equivalent: 62,
    bathtubs_filled: 17,
    car_km_saved: 5800, // km of driving emissions prevented
  }
};

// Environmental impact per kg of food waste prevented
export const impactPerKg = {
  co2: 0.295, // kg CO2 per kg food waste
  water: 2.02, // liters water per kg food waste
  land: 0.0083, // m² land per kg food waste
};

// Calculate environmental impact from waste reduction
export const calculateImpact = (foodWasteKg) => {
  return {
    co2_prevented: parseFloat((foodWasteKg * impactPerKg.co2).toFixed(1)),
    water_saved: parseFloat((foodWasteKg * impactPerKg.water).toFixed(0)),
    land_saved: parseFloat((foodWasteKg * impactPerKg.land).toFixed(2)),
  };
};

// Calculate personal impact (for student dashboard)
export const calculatePersonalImpact = (wastePercentages, dishesEaten) => {
  // Average portion size: 350g
  const avgPortionKg = 0.35;

  // Calculate total food waste prevented
  let totalWastePrevented = 0;

  wastePercentages.forEach((wastePercent) => {
    // Waste prevented = (baseline 30% - actual waste%)
    const baseline = 30;
    const prevented = Math.max(0, baseline - wastePercent);
    totalWastePrevented += (prevented / 100) * avgPortionKg;
  });

  return calculateImpact(totalWastePrevented);
};

// Student environmental impact based on their waste logs
export const demoStudentImpact = {
  total_meals: 18,
  average_waste: 8.2,
  baseline_waste: 30,
  waste_prevented_kg: 2.44, // (30% - 8.2%) * 0.35kg * 18 meals
  environmental_savings: {
    co2_prevented: 0.72, // kg
    water_saved: 4.9, // liters
    land_saved: 0.02, // m²
  },
  this_month: {
    meals_logged: 18,
    co2_prevented: 2.4, // kg
    water_saved: 180, // liters
    land_saved: 0.8, // m²
  },
  analogies: {
    water: "Enough to fill 3 bathtubs",
    co2: "Equivalent to planting 0.5 trees",
    car_km: "19 km of driving emissions prevented",
  }
};

// Calculate school-wide impact from waste rate change
export const calculateSchoolImpact = (
  oldWasteRate,
  newWasteRate,
  studentsCount,
  daysCount
) => {
  const avgMealsPerStudent = 1; // 1 lunch per day
  const avgPortionKg = 0.35;

  const oldWasteKg = (oldWasteRate / 100) * avgPortionKg * studentsCount * daysCount;
  const newWasteKg = (newWasteRate / 100) * avgPortionKg * studentsCount * daysCount;
  const wasteReduced = oldWasteKg - newWasteKg;

  return {
    waste_reduced_kg: parseFloat(wasteReduced.toFixed(0)),
    ...calculateImpact(wasteReduced),
  };
};

// Helper function to get formatted impact strings
export const getImpactStrings = (impact) => {
  return {
    co2: `${impact.co2_prevented}kg CO₂`,
    water: `${impact.water_saved}L water`,
    land: `${impact.land_saved}m² land`,
  };
};

export default environmentalImpact;
