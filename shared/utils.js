// Shared Utility Functions

// Format VND currency
export const formatVND = (amount) => {
  return `₫${amount.toLocaleString('vi-VN')}`;
};

// Format percentage
export const formatPercent = (value, decimals = 1) => {
  return `${value.toFixed(decimals)}%`;
};

// Format date to readable string
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

// Format date to day of week
export const formatDayOfWeek = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { weekday: 'long' });
};

// Get waste rate color based on threshold
export const getWasteRateColor = (wasteRate, target = 15) => {
  if (wasteRate <= target) return '#22C55E'; // success (green)
  if (wasteRate <= target * 1.5) return '#F59E0B'; // warning (amber)
  return '#EF4444'; // danger (red)
};

// Get rating color
export const getRatingColor = (rating) => {
  if (rating >= 4.5) return '#22C55E'; // Excellent
  if (rating >= 3.5) return '#10B981'; // Good
  if (rating >= 2.5) return '#F59E0B'; // Fair
  return '#EF4444'; // Poor
};

// Calculate waste reduction percentage
export const calculateWasteReduction = (oldRate, newRate) => {
  return ((oldRate - newRate) / oldRate) * 100;
};

// Calculate savings from waste reduction
export const calculateSavings = (wasteReduction, totalBudget) => {
  return (wasteReduction / 100) * totalBudget;
};

// Get status badge color
export const getStatusColor = (status) => {
  const colors = {
    pending: '#F59E0B',
    accepted: '#22C55E',
    declined: '#EF4444',
    implemented: '#3B82F6',
  };
  return colors[status] || '#6B7280';
};

// Get priority badge color
export const getPriorityColor = (priority) => {
  const colors = {
    high: '#EF4444',
    medium: '#F59E0B',
    low: '#6B7280',
  };
  return colors[priority] || '#6B7280';
};

// Truncate text
export const truncate = (text, maxLength = 50) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

// Get initials from name
export const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
};

// Calculate average from array
export const average = (arr) => {
  if (!arr || arr.length === 0) return 0;
  return arr.reduce((sum, val) => sum + val, 0) / arr.length;
};

// Sort array by property
export const sortBy = (arr, property, order = 'asc') => {
  return [...arr].sort((a, b) => {
    const aVal = a[property];
    const bVal = b[property];

    if (order === 'asc') {
      return aVal > bVal ? 1 : -1;
    } else {
      return aVal < bVal ? 1 : -1;
    }
  });
};

// Group array by property
export const groupBy = (arr, property) => {
  return arr.reduce((groups, item) => {
    const key = item[property];
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {});
};

// Get today's date in YYYY-MM-DD format
export const getTodayDate = () => {
  // For demo purposes, using 2024-12-26 as "today"
  return '2024-12-26';
};

// Check if date is today
export const isToday = (dateString) => {
  return dateString === getTodayDate();
};

// Get date N days from now
export const getDateOffset = (days) => {
  const date = new Date(getTodayDate());
  date.setDate(date.getDate() + days);
  return date.toISOString().split('T')[0];
};

// LocalStorage helpers
export const storage = {
  get: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return defaultValue;
    }
  },

  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error('Error writing to localStorage:', error);
      return false;
    }
  },

  remove: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Error removing from localStorage:', error);
      return false;
    }
  },

  clear: () => {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing localStorage:', error);
      return false;
    }
  }
};

// Debounce function
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Generate random ID
export const generateId = (prefix = 'id') => {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Clamp number between min and max
export const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};

export default {
  formatVND,
  formatPercent,
  formatDate,
  formatDayOfWeek,
  getWasteRateColor,
  getRatingColor,
  calculateWasteReduction,
  calculateSavings,
  getStatusColor,
  getPriorityColor,
  truncate,
  getInitials,
  average,
  sortBy,
  groupBy,
  getTodayDate,
  isToday,
  getDateOffset,
  storage,
  debounce,
  generateId,
  clamp,
};
