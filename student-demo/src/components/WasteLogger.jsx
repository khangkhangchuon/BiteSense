import { useState } from 'react';
import { wasteReasons } from '../data/mockData';

function WasteLogger({ dish, onSubmit, onClose }) {
  const [wastePercent, setWastePercent] = useState(0);
  const [selectedReasons, setSelectedReasons] = useState([]);
  const [comment, setComment] = useState('');

  const toggleReason = (reasonId) => {
    setSelectedReasons(prev =>
      prev.includes(reasonId)
        ? prev.filter(id => id !== reasonId)
        : [...prev, reasonId]
    );
  };

  const handleSubmit = () => {
    onSubmit({
      dishId: dish.id,
      wastePercent,
      reasons: selectedReasons,
      comment
    });
  };

  const getWasteEmoji = () => {
    if (wastePercent === 0) return '🌟';
    if (wastePercent <= 10) return '😊';
    if (wastePercent <= 25) return '😐';
    if (wastePercent <= 50) return '😕';
    return '😢';
  };

  const getWasteMessage = () => {
    if (wastePercent === 0) return "Zero waste hero! Amazing! 🎉";
    if (wastePercent <= 10) return "Great job! Very little waste! 👏";
    if (wastePercent <= 25) return "Not bad, room for improvement";
    if (wastePercent <= 50) return "Let's try to reduce waste next time";
    return "Consider smaller portions next time";
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="text-5xl mb-3 block">{dish.emoji}</span>
          <h2 className="text-2xl font-bold text-gray-800">{dish.name_vi}</h2>
          <p className="text-gray-500">{dish.name_en}</p>
        </div>

        {/* Waste Slider */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-600">How much did you waste?</p>
            <span className="text-3xl">{getWasteEmoji()}</span>
          </div>

          <div className="relative pt-2">
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={wastePercent}
              onChange={(e) => setWastePercent(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:w-6
                [&::-webkit-slider-thumb]:h-6
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-primary
                [&::-webkit-slider-thumb]:cursor-pointer
                [&::-webkit-slider-thumb]:shadow-md"
              style={{
                background: `linear-gradient(to right, #10B981 0%, #10B981 ${wastePercent}%, #E5E7EB ${wastePercent}%, #E5E7EB 100%)`
              }}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0%</span>
              <span>25%</span>
              <span>50%</span>
              <span>75%</span>
              <span>100%</span>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-4xl font-bold text-primary-dark">{wastePercent}%</p>
            <p className={`text-sm mt-1 ${wastePercent === 0 ? 'text-success font-medium' : 'text-gray-500'}`}>
              {getWasteMessage()}
            </p>
          </div>
        </div>

        {/* Reasons (only show if waste > 0) */}
        {wastePercent > 0 && (
          <div className="mb-6">
            <p className="text-gray-600 mb-3">Why did you waste? (optional)</p>
            <div className="flex flex-wrap gap-2">
              {wasteReasons.map((reason) => (
                <button
                  key={reason.id}
                  onClick={() => toggleReason(reason.id)}
                  className={`px-3 py-2 rounded-full text-sm transition-all flex items-center gap-1 ${
                    selectedReasons.includes(reason.id)
                      ? 'bg-accent text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <span>{reason.emoji}</span>
                  <span>{reason.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Comment */}
        {wastePercent > 0 && (
          <div className="mb-6">
            <p className="text-gray-600 mb-2">Additional comments (optional)</p>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Any other feedback..."
              className="w-full p-3 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
              rows={2}
            />
          </div>
        )}

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
            className="flex-1 py-3 px-4 rounded-xl font-semibold bg-primary text-white hover:bg-primary-dark transition-all"
          >
            Log Waste
          </button>
        </div>
      </div>
    </div>
  );
}

export default WasteLogger;
