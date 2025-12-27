import { getTodayName, getDishesForDay } from '../data/mockData';
import MenuCard from './MenuCard';

function TodayMenu({ ratedDishes, onRate, onLogWaste }) {
  const today = getTodayName();
  const todaysDishes = getDishesForDay(today);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              <span className="mr-2">🍽️</span>
              Today's Menu
            </h2>
            <p className="text-gray-500 mt-1">{today}'s lunch options at the cafeteria</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Lunch served</p>
            <p className="text-lg font-semibold text-primary-dark">11:30 AM - 12:30 PM</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-4">
        <div className="flex items-center gap-4">
          <span className="text-3xl">💡</span>
          <p className="text-gray-700">
            <strong>Quick tip:</strong> Rate your meal and log any waste to help us improve! It only takes 5 seconds.
          </p>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {todaysDishes.map((dish) => (
          <MenuCard
            key={dish.id}
            dish={dish}
            isRated={ratedDishes.includes(dish.id)}
            onRate={onRate}
            onLogWaste={onLogWaste}
          />
        ))}
      </div>

      {/* Environmental Impact Preview */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          <span className="mr-2">🌱</span>
          When you reduce waste, you help save:
        </h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-success/10 rounded-xl p-4">
            <span className="text-3xl block mb-2">🌍</span>
            <p className="text-sm text-gray-600">CO₂ emissions</p>
          </div>
          <div className="bg-secondary/10 rounded-xl p-4">
            <span className="text-3xl block mb-2">💧</span>
            <p className="text-sm text-gray-600">Water resources</p>
          </div>
          <div className="bg-accent/10 rounded-xl p-4">
            <span className="text-3xl block mb-2">🌾</span>
            <p className="text-sm text-gray-600">Agricultural land</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodayMenu;
