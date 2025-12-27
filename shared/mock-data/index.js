// Mock Data Index
// Central export point for all mock data

export { schoolData } from './school-data.js';
export {
  dishes,
  getDishById,
  getDishesByCategory,
  getTopRatedDishes,
  getMostWastedDishes,
  getLeastWastedDishes,
} from './dishes-data.js';

export {
  historicalData,
  getDataByDateRange,
  getLastNDays,
  getWeeklyAverages,
  getDayOfWeekPatterns,
} from './historical-data.js';

export {
  weeklyMenu,
  getMenuByDate,
  getTodaysMenu,
  getThisWeeksMenu,
  getNextWeeksMenu,
  getUpcomingDays,
} from './menu-data.js';

export {
  recommendations,
  getRecommendationsByStatus,
  getPendingRecommendations,
  getImplementedRecommendations,
  getRecommendationByDishId,
  getTotalPotentialSavings,
  getHighImpactRecommendations,
} from './recommendations-data.js';

export {
  studentLogs,
  demoStudentLogs,
  demoStudentStats,
  getLogsByStudentId,
  getLogsByDate,
  getLogsByDishId,
  getStudentStats,
} from './student-logs-data.js';

export {
  environmentalImpact,
  impactPerKg,
  calculateImpact,
  calculatePersonalImpact,
  calculateSchoolImpact,
  demoStudentImpact,
  getImpactStrings,
} from './environmental-data.js';
