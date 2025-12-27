import { useState } from 'react';

function RecommendationCard({ recommendation, onAccept, onDecline }) {
  const [status, setStatus] = useState(recommendation.status);

  const handleAccept = () => {
    setStatus('accepted');
    onAccept?.(recommendation.id);
  };

  const handleDecline = () => {
    setStatus('declined');
    onDecline?.(recommendation.id);
  };

  const confidenceColor = recommendation.confidence >= 0.85
    ? 'text-success'
    : recommendation.confidence >= 0.75
      ? 'text-primary'
      : 'text-accent';

  if (status === 'accepted') {
    return (
      <div className="bg-success/10 border border-success/20 rounded-xl p-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl">✅</span>
          <div>
            <p className="font-semibold text-success">Recommendation Accepted</p>
            <p className="text-sm text-gray-600">{recommendation.dish_name} - {recommendation.suggestion}</p>
          </div>
        </div>
      </div>
    );
  }

  if (status === 'declined') {
    return (
      <div className="bg-gray-100 border border-gray-200 rounded-xl p-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl">❌</span>
          <div>
            <p className="font-semibold text-gray-500">Recommendation Declined</p>
            <p className="text-sm text-gray-400">{recommendation.dish_name}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🤖</span>
          <div>
            <h4 className="font-semibold text-gray-800">{recommendation.dish_name}</h4>
            <p className="text-sm text-gray-500">{recommendation.dish_name_en}</p>
          </div>
        </div>
        <div className={`text-sm font-medium ${confidenceColor}`}>
          {Math.round(recommendation.confidence * 100)}% confidence
        </div>
      </div>

      {/* Issue */}
      <div className="bg-warning/10 rounded-lg p-4 mb-4">
        <p className="text-sm font-medium text-warning">Issue Detected</p>
        <p className="text-gray-700 mt-1">{recommendation.issue}</p>
      </div>

      {/* Suggestion */}
      <div className="bg-primary/10 rounded-lg p-4 mb-4">
        <p className="text-sm font-medium text-primary">AI Suggestion</p>
        <p className="text-gray-700 mt-1">{recommendation.suggestion}</p>
      </div>

      {/* Projected Impact */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <p className="text-xs text-gray-500 uppercase">Waste Reduction</p>
          <p className="font-semibold text-primary-dark">{recommendation.projected_waste_reduction}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <p className="text-xs text-gray-500 uppercase">Weekly Savings</p>
          <p className="font-semibold text-primary-dark">₫{recommendation.projected_savings.toLocaleString()}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={handleAccept}
          className="flex-1 bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-dark transition-colors"
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="flex-1 bg-gray-100 text-gray-600 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
        >
          Decline
        </button>
      </div>
    </div>
  );
}

export default RecommendationCard;
