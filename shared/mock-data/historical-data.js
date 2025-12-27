// Historical Waste Data (3 months)
// Generating realistic data showing waste reduction from 32% to 18.5%

const generateHistoricalData = () => {
  const data = [];
  const startDate = new Date('2024-09-15');
  const endDate = new Date('2024-12-26');

  // Start at 32% waste rate and gradually decrease to 18.5%
  const startWasteRate = 32.0;
  const endWasteRate = 18.5;
  const dayCount = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
  const dailyReduction = (startWasteRate - endWasteRate) / dayCount;

  for (let i = 0; i <= dayCount; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(currentDate.getDate() + i);

    // Skip weekends (Saturday = 6, Sunday = 0)
    const dayOfWeek = currentDate.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) continue;

    // Calculate waste rate with some random variation
    const trendWasteRate = startWasteRate - (dailyReduction * i);
    const randomVariation = (Math.random() - 0.5) * 3; // ±1.5% variation
    let wasteRate = trendWasteRate + randomVariation;

    // Friday tends to have slightly higher waste
    if (dayOfWeek === 5) {
      wasteRate += Math.random() * 2;
    }

    // Monday tends to have slightly lower waste
    if (dayOfWeek === 1) {
      wasteRate -= Math.random() * 1.5;
    }

    // Ensure waste rate doesn't go below 10% or above starting rate
    wasteRate = Math.max(10, Math.min(startWasteRate, wasteRate));

    // Calculate cost based on waste rate (higher waste = higher cost)
    const baseCost = 1200000; // Base daily food cost in VND
    const wasteCost = baseCost * (wasteRate / 100);

    data.push({
      date: currentDate.toISOString().split('T')[0],
      waste_rate: parseFloat(wasteRate.toFixed(1)),
      cost: Math.round(wasteCost),
      day_of_week: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayOfWeek],
      meals_served: 450 + Math.floor(Math.random() * 50 - 25), // 425-475 meals
    });
  }

  return data;
};

export const historicalData = generateHistoricalData();

// Helper function to get data for a specific date range
export const getDataByDateRange = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  return historicalData.filter(entry => {
    const entryDate = new Date(entry.date);
    return entryDate >= start && entryDate <= end;
  });
};

// Helper function to get last N days of data
export const getLastNDays = (days) => {
  return historicalData.slice(-days);
};

// Helper function to get weekly average waste rates
export const getWeeklyAverages = () => {
  const weeks = {};

  historicalData.forEach(entry => {
    const date = new Date(entry.date);
    const weekStart = new Date(date);
    weekStart.setDate(date.getDate() - date.getDay());
    const weekKey = weekStart.toISOString().split('T')[0];

    if (!weeks[weekKey]) {
      weeks[weekKey] = { total: 0, count: 0, weekStart: weekKey };
    }

    weeks[weekKey].total += entry.waste_rate;
    weeks[weekKey].count += 1;
  });

  return Object.values(weeks).map(week => ({
    week: week.weekStart,
    average_waste_rate: parseFloat((week.total / week.count).toFixed(1)),
  }));
};

// Helper function to get day-of-week patterns
export const getDayOfWeekPatterns = () => {
  const patterns = {
    Mon: { total: 0, count: 0 },
    Tue: { total: 0, count: 0 },
    Wed: { total: 0, count: 0 },
    Thu: { total: 0, count: 0 },
    Fri: { total: 0, count: 0 },
  };

  historicalData.forEach(entry => {
    if (patterns[entry.day_of_week]) {
      patterns[entry.day_of_week].total += entry.waste_rate;
      patterns[entry.day_of_week].count += 1;
    }
  });

  return Object.entries(patterns).map(([day, data]) => ({
    day,
    average_waste_rate: parseFloat((data.total / data.count).toFixed(1)),
  }));
};

export default historicalData;
