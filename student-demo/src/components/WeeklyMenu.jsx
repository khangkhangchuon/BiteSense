import { weeklyMenu, getDishById, getTodayName } from '../data/mockData';

function WeeklyMenu({ favorites, onToggleFavorite }) {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const today = getTodayName();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          <span className="mr-2">📅</span>
          This Week's Menu
        </h2>
        <p className="text-gray-500">Plan ahead and know what's coming! Mark your favorites.</p>
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {days.map((day) => {
          const isToday = day === today;
          const dishIds = weeklyMenu[day] || [];
          const dishes = dishIds.map(id => getDishById(id)).filter(Boolean);

          return (
            <div
              key={day}
              className={`bg-white rounded-2xl shadow-sm border overflow-hidden ${
                isToday ? 'border-primary ring-2 ring-primary/20' : 'border-gray-100'
              }`}
            >
              {/* Day Header */}
              <div className={`px-4 py-3 ${isToday ? 'bg-primary text-white' : 'bg-gray-50'}`}>
                <h3 className={`font-bold ${isToday ? 'text-white' : 'text-gray-800'}`}>
                  {day}
                  {isToday && <span className="ml-2 text-sm font-normal">(Today)</span>}
                </h3>
              </div>

              {/* Dishes */}
              <div className="p-4 space-y-3">
                {dishes.map((dish) => {
                  const isFavorite = favorites.includes(dish.id);

                  return (
                    <div
                      key={dish.id}
                      className="bg-gray-50 rounded-xl p-3 relative group"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-3xl">{dish.emoji}</span>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-800 truncate">{dish.name_vi}</p>
                          <p className="text-sm text-gray-500 truncate">{dish.name_en}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-accent text-xs">{'★'.repeat(Math.floor(dish.rating))}</span>
                            <span className="text-gray-400 text-xs">{dish.rating}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => onToggleFavorite(dish.id)}
                          className="text-2xl transition-transform hover:scale-110"
                        >
                          {isFavorite ? '❤️' : '🤍'}
                        </button>
                      </div>

                      {/* Nutrition Preview */}
                      <div className="mt-2 pt-2 border-t border-gray-200 grid grid-cols-2 gap-1 text-xs text-gray-500">
                        <span>🔥 {dish.nutrition.calories} kcal</span>
                        <span>💪 {dish.nutrition.protein}g protein</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Favorites Section */}
      {favorites.length > 0 && (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            <span className="mr-2">❤️</span>
            Your Favorites
          </h3>
          <div className="flex flex-wrap gap-3">
            {favorites.map(id => {
              const dish = getDishById(id);
              if (!dish) return null;
              return (
                <div
                  key={id}
                  className="flex items-center gap-2 bg-pink-50 px-4 py-2 rounded-full"
                >
                  <span>{dish.emoji}</span>
                  <span className="font-medium text-gray-700">{dish.name_vi}</span>
                  <button
                    onClick={() => onToggleFavorite(id)}
                    className="text-pink-500 hover:text-pink-700"
                  >
                    ×
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-center gap-6 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-primary"></div>
          <span>Today</span>
        </div>
        <div className="flex items-center gap-2">
          <span>❤️</span>
          <span>Favorite</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🤍</span>
          <span>Click to favorite</span>
        </div>
      </div>
    </div>
  );
}

export default WeeklyMenu;
