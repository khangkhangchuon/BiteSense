// Weekly Menu Mock Data
// Maps dates to dish IDs

export const weeklyMenu = {
  // Current week
  "2024-12-23": { dishes: [1, 5, 9] }, // Mon: Phở Bò, Gỏi Cuốn, Chả Giò
  "2024-12-24": { dishes: [2, 5, 10] }, // Tue: Cơm Tấm, Gỏi Cuốn, Canh Chua
  "2024-12-25": { dishes: [3, 9] }, // Wed: Bún Chả, Chả Giò
  "2024-12-26": { dishes: [4, 5] }, // Thu: Bánh Mì, Gỏi Cuốn (TODAY)
  "2024-12-27": { dishes: [11, 9, 10] }, // Fri: Phở Gà, Chả Giò, Canh Chua

  // Next week
  "2024-12-30": { dishes: [6, 5, 9] }, // Mon: Cơm Chiên, Gỏi Cuốn, Chả Giò
  "2024-12-31": { dishes: [7, 5] }, // Tue: Bún Bò Huế, Gỏi Cuốn
  "2025-01-01": { dishes: [8, 9, 10] }, // Wed: Xôi Gà, Chả Giò, Canh Chua
  "2025-01-02": { dishes: [12, 5, 9] }, // Thu: Cơm Sườn, Gỏi Cuốn, Chả Giò
  "2025-01-03": { dishes: [1, 5, 10] }, // Fri: Phở Bò, Gỏi Cuốn, Canh Chua

  // Week after
  "2025-01-06": { dishes: [2, 9] }, // Mon: Cơm Tấm, Chả Giò
  "2025-01-07": { dishes: [3, 5, 10] }, // Tue: Bún Chả, Gỏi Cuốn, Canh Chua
  "2025-01-08": { dishes: [4, 9] }, // Wed: Bánh Mì, Chả Giò
  "2025-01-09": { dishes: [11, 5, 9] }, // Thu: Phở Gà, Gỏi Cuốn, Chả Giò
  "2025-01-10": { dishes: [6, 5, 10] }, // Fri: Cơm Chiên, Gỏi Cuốn, Canh Chua
};

// Helper function to get menu for a specific date
export const getMenuByDate = (date) => {
  const dateStr = typeof date === 'string' ? date : date.toISOString().split('T')[0];
  return weeklyMenu[dateStr] || { dishes: [] };
};

// Helper function to get today's menu
export const getTodaysMenu = () => {
  // For demo purposes, using 2024-12-26 as "today"
  const today = '2024-12-26';
  return getMenuByDate(today);
};

// Helper function to get this week's menu (Mon-Fri)
export const getThisWeeksMenu = () => {
  const thisWeek = [
    { date: '2024-12-23', day: 'Monday' },
    { date: '2024-12-24', day: 'Tuesday' },
    { date: '2024-12-25', day: 'Wednesday' },
    { date: '2024-12-26', day: 'Thursday' },
    { date: '2024-12-27', day: 'Friday' },
  ];

  return thisWeek.map(({ date, day }) => ({
    date,
    day,
    menu: getMenuByDate(date),
  }));
};

// Helper function to get next week's menu
export const getNextWeeksMenu = () => {
  const nextWeek = [
    { date: '2024-12-30', day: 'Monday' },
    { date: '2024-12-31', day: 'Tuesday' },
    { date: '2025-01-01', day: 'Wednesday' },
    { date: '2025-01-02', day: 'Thursday' },
    { date: '2025-01-03', day: 'Friday' },
  ];

  return nextWeek.map(({ date, day }) => ({
    date,
    day,
    menu: getMenuByDate(date),
  }));
};

// Helper function to get upcoming 5 school days
export const getUpcomingDays = (count = 5) => {
  const upcoming = [
    { date: '2024-12-26', day: 'Thursday' },
    { date: '2024-12-27', day: 'Friday' },
    { date: '2024-12-30', day: 'Monday' },
    { date: '2024-12-31', day: 'Tuesday' },
    { date: '2025-01-01', day: 'Wednesday' },
    { date: '2025-01-02', day: 'Thursday' },
    { date: '2025-01-03', day: 'Friday' },
  ];

  return upcoming.slice(0, count).map(({ date, day }) => ({
    date,
    day,
    menu: getMenuByDate(date),
  }));
};

export default weeklyMenu;
