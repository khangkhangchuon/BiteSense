import { useState } from 'react';

function RatingModal({ dish, onSubmit, onClose }) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const feedbackOptions = [
    "Delicious! 😋",
    "Good portion size 👍",
    "Fresh ingredients 🥬",
    "Could be better 🤔",
    "Too salty 🧂",
    "Too bland 😐"
  ];

  const handleSubmit = () => {
    if (rating === 0) return;
    onSubmit({ dishId: dish.id, rating, feedback });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="text-5xl mb-3 block">{dish.emoji}</span>
          <h2 className="text-2xl font-bold text-gray-800">{dish.name_vi}</h2>
          <p className="text-gray-500">{dish.name_en}</p>
        </div>

        {/* Star Rating */}
        <div className="mb-6">
          <p className="text-center text-gray-600 mb-3">How was your meal?</p>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="text-5xl transition-transform hover:scale-110"
              >
                {star <= (hoveredRating || rating) ? '⭐' : '☆'}
              </button>
            ))}
          </div>
          {rating > 0 && (
            <p className="text-center mt-2 text-primary font-medium">
              {rating === 5 && "Amazing! 🎉"}
              {rating === 4 && "Great! 😊"}
              {rating === 3 && "Good 👍"}
              {rating === 2 && "Could be better 🤔"}
              {rating === 1 && "Not good 😕"}
            </p>
          )}
        </div>

        {/* Quick Feedback */}
        <div className="mb-6">
          <p className="text-gray-600 mb-3 text-center">Quick feedback (optional)</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {feedbackOptions.map((option) => (
              <button
                key={option}
                onClick={() => setFeedback(feedback === option ? '' : option)}
                className={`px-3 py-2 rounded-full text-sm transition-all ${
                  feedback === option
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-xl font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={rating === 0}
            className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
              rating > 0
                ? 'bg-primary text-white hover:bg-primary-dark'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Submit Rating
          </button>
        </div>
      </div>
    </div>
  );
}

export default RatingModal;
