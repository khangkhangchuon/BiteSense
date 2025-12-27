import { useState } from 'react';

function DishPerformanceTable({ dishes }) {
  const [sortBy, setSortBy] = useState('waste_rate');
  const [sortOrder, setSortOrder] = useState('desc');

  const sortedDishes = [...dishes].sort((a, b) => {
    const aVal = a[sortBy];
    const bVal = b[sortBy];
    return sortOrder === 'desc' ? bVal - aVal : aVal - bVal;
  });

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
    } else {
      setSortBy(column);
      setSortOrder('desc');
    }
  };

  const getWasteColor = (rate) => {
    if (rate <= 10) return 'text-success bg-success/10';
    if (rate <= 20) return 'text-primary bg-primary/10';
    if (rate <= 25) return 'text-accent bg-accent/10';
    return 'text-warning bg-warning/10';
  };

  const getRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    return '★'.repeat(fullStars) + (hasHalf ? '½' : '') + '☆'.repeat(5 - fullStars - (hasHalf ? 1 : 0));
  };

  const getTrendIcon = (trend) => {
    const icons = {
      up: <span className="text-success">↑</span>,
      down: <span className="text-warning">↓</span>,
      stable: <span className="text-gray-400">→</span>
    };
    return icons[trend] || icons.stable;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800">Dish Performance</h3>
        <p className="text-gray-500 text-sm">Click column headers to sort</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Dish
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer hover:text-primary"
                onClick={() => handleSort('waste_rate')}
              >
                Waste Rate {sortBy === 'waste_rate' && (sortOrder === 'desc' ? '↓' : '↑')}
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer hover:text-primary"
                onClick={() => handleSort('rating')}
              >
                Rating {sortBy === 'rating' && (sortOrder === 'desc' ? '↓' : '↑')}
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer hover:text-primary"
                onClick={() => handleSort('cost_per_serving')}
              >
                Cost {sortBy === 'cost_per_serving' && (sortOrder === 'desc' ? '↓' : '↑')}
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Trend
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {sortedDishes.map((dish) => (
              <tr key={dish.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium text-gray-800">{dish.name_vi}</p>
                    <p className="text-sm text-gray-500">{dish.name_en}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getWasteColor(dish.waste_rate)}`}>
                    {dish.waste_rate}%
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-accent">{getRatingStars(dish.rating)}</span>
                    <span className="text-gray-600 text-sm">{dish.rating}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">
                  ₫{dish.cost_per_serving.toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  {getTrendIcon(dish.trend)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DishPerformanceTable;
