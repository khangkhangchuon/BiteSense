function MenuCard({ dish, onRate, onLogWaste, isRated }) {
  const getRatingStars = (rating) => {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      {/* Dish Image/Emoji Header */}
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 text-center">
        <span className="text-7xl">{dish.emoji}</span>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800">{dish.name_vi}</h3>
        <p className="text-gray-500 text-sm mb-3">{dish.name_en}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-accent">{getRatingStars(dish.rating)}</span>
          <span className="text-gray-600 text-sm">{dish.rating} ({dish.total_ratings} reviews)</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{dish.description}</p>

        {/* Nutrition Grid */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <p className="text-lg font-bold text-primary-dark">{dish.nutrition.calories}</p>
            <p className="text-xs text-gray-500">kcal</p>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <p className="text-lg font-bold text-primary-dark">{dish.nutrition.protein}g</p>
            <p className="text-xs text-gray-500">protein</p>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <p className="text-lg font-bold text-primary-dark">{dish.nutrition.carbs}g</p>
            <p className="text-xs text-gray-500">carbs</p>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <p className="text-lg font-bold text-primary-dark">{dish.nutrition.fat}g</p>
            <p className="text-xs text-gray-500">fat</p>
          </div>
        </div>

        {/* Portion Size */}
        <p className="text-gray-500 text-sm mb-4">
          <span className="mr-1">📏</span> Portion: {dish.portion_size}g
        </p>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => onRate(dish)}
            className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
              isRated
                ? 'bg-success/10 text-success border-2 border-success'
                : 'bg-primary text-white hover:bg-primary-dark'
            }`}
          >
            {isRated ? '✓ Rated' : '⭐ Rate'}
          </button>
          <button
            onClick={() => onLogWaste(dish)}
            className="flex-1 py-3 px-4 rounded-xl font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all"
          >
            📊 Log Waste
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
