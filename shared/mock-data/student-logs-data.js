// Student Logs Mock Data
// Sample logs from students for demo purposes

// Generate realistic student logs
const generateStudentLogs = () => {
  const logs = [];
  const studentIds = Array.from({ length: 387 }, (_, i) => `student-${i + 1}`);
  const dates = [];

  // Generate dates for last 30 school days
  const startDate = new Date('2024-11-20');
  for (let i = 0; i < 45; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    const dayOfWeek = date.getDay();
    // Skip weekends
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      dates.push(date.toISOString().split('T')[0]);
    }
  }

  const reasons = [
    'portion_large',
    'not_hungry',
    'too_salty',
    'too_spicy',
    'too_oily',
    'too_sour',
    'too_hot',
    'taste',
    null
  ];

  const comments = [
    "Delicious!",
    "Too much food",
    "Very good",
    "A bit salty",
    "Perfect portion",
    "Love it!",
    "Could be better",
    null,
    null,
    null
  ];

  // Dish IDs available (1-12)
  const dishIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // Generate logs with realistic distribution
  dates.forEach(date => {
    // Not all students log every day (86% participation rate)
    const activeStudents = studentIds.filter(() => Math.random() < 0.86);

    activeStudents.forEach(studentId => {
      // Random dish from menu (simplified - just pick random dish)
      const dishId = dishIds[Math.floor(Math.random() * dishIds.length)];

      // Generate waste percentage (weighted toward lower waste)
      let wastePercent;
      const rand = Math.random();
      if (rand < 0.4) {
        wastePercent = 0; // 40% have zero waste
      } else if (rand < 0.7) {
        wastePercent = Math.floor(Math.random() * 15); // 30% have 0-15% waste
      } else if (rand < 0.9) {
        wastePercent = Math.floor(Math.random() * 35) + 15; // 20% have 15-50% waste
      } else {
        wastePercent = Math.floor(Math.random() * 50) + 50; // 10% have 50-100% waste
      }

      // Rating (weighted toward positive)
      let rating;
      const ratingRand = Math.random();
      if (ratingRand < 0.15) rating = 5;
      else if (ratingRand < 0.40) rating = 4;
      else if (ratingRand < 0.70) rating = 3;
      else if (ratingRand < 0.90) rating = 2;
      else rating = 1;

      // Reason (only if waste > 5%)
      const reason = wastePercent > 5
        ? reasons[Math.floor(Math.random() * reasons.length)]
        : null;

      // Comment (20% of logs)
      const comment = Math.random() < 0.2
        ? comments[Math.floor(Math.random() * comments.length)]
        : null;

      logs.push({
        id: `log-${logs.length + 1}`,
        student_id: studentId,
        date,
        dish_id: dishId,
        rating,
        waste_percent: wastePercent,
        reason,
        comment,
        timestamp: `${date}T12:${Math.floor(Math.random() * 60)}:${Math.floor(Math.random() * 60)}`,
      });
    });
  });

  return logs;
};

export const studentLogs = generateStudentLogs();

// Demo student's personal logs (for student demo)
export const demoStudentLogs = studentLogs
  .filter(log => log.student_id === 'student-1')
  .slice(-20); // Last 20 logs

// Helper function to get logs by student ID
export const getLogsByStudentId = (studentId) => {
  return studentLogs.filter(log => log.student_id === studentId);
};

// Helper function to get logs by date
export const getLogsByDate = (date) => {
  return studentLogs.filter(log => log.date === date);
};

// Helper function to get logs by dish ID
export const getLogsByDishId = (dishId) => {
  return studentLogs.filter(log => log.dish_id === dishId);
};

// Helper function to calculate student stats
export const getStudentStats = (studentId) => {
  const logs = getLogsByStudentId(studentId);

  if (logs.length === 0) {
    return null;
  }

  const totalWaste = logs.reduce((sum, log) => sum + log.waste_percent, 0);
  const avgWaste = totalWaste / logs.length;

  const avgRating = logs.reduce((sum, log) => sum + log.rating, 0) / logs.length;

  const zeroWasteDays = logs.filter(log => log.waste_percent === 0).length;

  // Calculate streak (consecutive days with <10% waste)
  let currentStreak = 0;
  const sortedLogs = [...logs].sort((a, b) => new Date(b.date) - new Date(a.date));
  for (const log of sortedLogs) {
    if (log.waste_percent < 10) {
      currentStreak++;
    } else {
      break;
    }
  }

  return {
    total_logs: logs.length,
    average_waste: parseFloat(avgWaste.toFixed(1)),
    average_rating: parseFloat(avgRating.toFixed(1)),
    zero_waste_days: zeroWasteDays,
    current_streak: currentStreak,
  };
};

// Demo student stats for student demo
export const demoStudentStats = {
  student_id: 'demo-student',
  name: 'Demo Student',
  total_logs: 18,
  average_waste: 8.2,
  average_rating: 4.3,
  zero_waste_days: 12,
  current_streak: 7,
  this_month: {
    meals_logged: 18,
    co2_prevented: 2.4, // kg
    water_saved: 180, // liters
    land_saved: 0.8, // m²
  }
};

export default studentLogs;
