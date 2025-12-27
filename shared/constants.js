// Shared Constants across all 1BM applications

// Color Palette
export const COLORS = {
  primary: '#10B981',
  secondary: '#3B82F6',
  accent: '#F59E0B',
  success: '#22C55E',
  warning: '#EF4444',
  neutral: {
    50: '#F3F4F6',
    100: '#E5E7EB',
    200: '#D1D5DB',
    300: '#9CA3AF',
    400: '#6B7280',
    500: '#4B5563',
    600: '#374151',
    700: '#1F2937',
    800: '#111827',
    900: '#030712',
  }
};

// Brand
export const BRAND = {
  name: '1BM',
  fullName: '1 Bite Matters',
  tagline: 'Stop Wasting Food. Start Knowing What Students Want.',
  logo: '🍽️', // Can be replaced with actual logo
};

// School Information
export const SCHOOL = {
  name: 'Wellspring International School',
  location: 'Ho Chi Minh City, Vietnam',
  targetWasteRate: 15.0,
  baselineWasteRate: 32.0,
};

// Waste Categories
export const WASTE_REASONS = [
  { value: 'portion_large', label: 'Portion too large' },
  { value: 'not_hungry', label: 'Not hungry' },
  { value: 'too_salty', label: 'Too salty' },
  { value: 'too_spicy', label: 'Too spicy' },
  { value: 'too_oily', label: 'Too oily' },
  { value: 'too_sour', label: 'Too sour' },
  { value: 'too_hot', label: 'Too hot' },
  { value: 'taste', label: 'Didn\'t like the taste' },
  { value: 'other', label: 'Other' },
];

// Demo URLs (update these after deployment)
export const DEMO_URLS = {
  landing: 'http://localhost:5173',
  admin: 'http://localhost:5174',
  student: 'http://localhost:5175',
};

// LocalStorage Keys
export const STORAGE_KEYS = {
  studentName: '1bm_student_name',
  studentLogs: '1bm_student_logs',
  adminData: '1bm_admin_data',
  recommendations: '1bm_recommendations',
};

// Chart Colors
export const CHART_COLORS = {
  primary: '#10B981',
  secondary: '#3B82F6',
  accent: '#F59E0B',
  success: '#22C55E',
  warning: '#EF4444',
  danger: '#DC2626',
  purple: '#8B5CF6',
  pink: '#EC4899',
};

// Status Colors
export const STATUS_COLORS = {
  pending: '#F59E0B',
  accepted: '#22C55E',
  declined: '#EF4444',
  implemented: '#3B82F6',
};

// Priority Colors
export const PRIORITY_COLORS = {
  high: '#EF4444',
  medium: '#F59E0B',
  low: '#6B7280',
};

// Days of Week
export const DAYS_OF_WEEK = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
];

export const DAYS_SHORT = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

// Meal Categories
export const MEAL_CATEGORIES = {
  main: 'Main Course',
  appetizer: 'Appetizer',
  soup: 'Soup',
  dessert: 'Dessert',
};

// Rating Labels
export const RATING_LABELS = {
  1: 'Poor',
  2: 'Fair',
  3: 'Good',
  4: 'Very Good',
  5: 'Excellent',
};

// Environmental Conversion Factors
export const ENV_FACTORS = {
  co2PerKg: 0.295, // kg CO2 per kg food waste
  waterPerKg: 2.02, // liters water per kg food waste
  landPerKg: 0.0083, // m² land per kg food waste
  treesPerKg: 0.05, // trees equivalent per kg CO2
};

// Recommendation Confidence Thresholds
export const CONFIDENCE_LEVELS = {
  high: 0.8,
  medium: 0.6,
  low: 0.4,
};

// Recommendation Priority Thresholds
export const PRIORITY_THRESHOLDS = {
  high: {
    wasteRate: 20,
    potentialSavings: 40000,
  },
  medium: {
    wasteRate: 15,
    potentialSavings: 20000,
  },
};

export default {
  COLORS,
  BRAND,
  SCHOOL,
  WASTE_REASONS,
  DEMO_URLS,
  STORAGE_KEYS,
  CHART_COLORS,
  STATUS_COLORS,
  PRIORITY_COLORS,
  DAYS_OF_WEEK,
  DAYS_SHORT,
  MEAL_CATEGORIES,
  RATING_LABELS,
  ENV_FACTORS,
  CONFIDENCE_LEVELS,
  PRIORITY_THRESHOLDS,
};
