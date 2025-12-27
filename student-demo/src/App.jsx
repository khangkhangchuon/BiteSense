import { useState, useEffect } from 'react';
import Header from './components/Header';
import TodayMenu from './components/TodayMenu';
import PersonalImpact from './components/PersonalImpact';
import WeeklyMenu from './components/WeeklyMenu';
import NutritionistChat from './components/NutritionistChat';
import RatingModal from './components/RatingModal';
import WasteLogger from './components/WasteLogger';
import { studentProfile, studentLogs as initialLogs } from './data/mockData';

function App() {
  // State
  const [activeTab, setActiveTab] = useState('today');
  const [studentName, setStudentName] = useState(() => {
    return localStorage.getItem('bitesense_student_name') || '';
  });
  const [showNamePrompt, setShowNamePrompt] = useState(!studentName);
  const [logs, setLogs] = useState(() => {
    const saved = localStorage.getItem('bitesense_logs');
    return saved ? JSON.parse(saved) : initialLogs;
  });
  const [ratedDishes, setRatedDishes] = useState(() => {
    const saved = localStorage.getItem('bitesense_rated_today');
    return saved ? JSON.parse(saved) : [];
  });
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('bitesense_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  // Modal state
  const [ratingModal, setRatingModal] = useState(null);
  const [wasteModal, setWasteModal] = useState(null);
  const [showSuccess, setShowSuccess] = useState(null);

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem('bitesense_logs', JSON.stringify(logs));
  }, [logs]);

  useEffect(() => {
    localStorage.setItem('bitesense_rated_today', JSON.stringify(ratedDishes));
  }, [ratedDishes]);

  useEffect(() => {
    localStorage.setItem('bitesense_favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Handlers
  const handleNameSubmit = (name) => {
    setStudentName(name);
    localStorage.setItem('bitesense_student_name', name);
    setShowNamePrompt(false);
  };

  const handleRatingSubmit = ({ dishId, rating, feedback }) => {
    const today = new Date().toISOString().split('T')[0];
    const newLog = {
      date: today,
      dish_id: dishId,
      rating,
      waste_percent: 0, // Will be updated if they log waste
      feedback
    };

    setLogs(prev => [...prev, newLog]);
    setRatedDishes(prev => [...prev, dishId]);
    setRatingModal(null);

    // Show success message
    setShowSuccess('rating');
    setTimeout(() => setShowSuccess(null), 2000);
  };

  const handleWasteSubmit = ({ dishId, wastePercent, reasons, comment }) => {
    const today = new Date().toISOString().split('T')[0];

    // Update existing log if rated today, otherwise create new
    setLogs(prev => {
      const existingIndex = prev.findIndex(
        log => log.date === today && log.dish_id === dishId
      );

      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          waste_percent: wastePercent,
          waste_reasons: reasons,
          waste_comment: comment
        };
        return updated;
      }

      return [...prev, {
        date: today,
        dish_id: dishId,
        rating: 0,
        waste_percent: wastePercent,
        waste_reasons: reasons,
        waste_comment: comment
      }];
    });

    setWasteModal(null);

    // Show success message
    setShowSuccess(wastePercent === 0 ? 'zero-waste' : 'waste');
    setTimeout(() => setShowSuccess(null), 2500);
  };

  const handleToggleFavorite = (dishId) => {
    setFavorites(prev =>
      prev.includes(dishId)
        ? prev.filter(id => id !== dishId)
        : [...prev, dishId]
    );
  };

  // Name prompt screen
  if (showNamePrompt) {
    return (
      <div className="min-h-screen bg-gray-bg flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center">
          <span className="text-6xl block mb-4">🥗</span>
          <h1 className="text-3xl font-bold text-primary-dark mb-2">Welcome to BiteSense!</h1>
          <p className="text-gray-500 mb-6">Track your meals, reduce waste, and make a difference.</p>

          <form onSubmit={(e) => {
            e.preventDefault();
            const name = e.target.name.value.trim();
            if (name) handleNameSubmit(name);
          }}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-center text-lg focus:outline-none focus:ring-2 focus:ring-primary/50 mb-4"
              autoFocus
            />
            <button
              type="submit"
              className="w-full py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
            >
              Get Started
            </button>
          </form>

          <button
            onClick={() => handleNameSubmit('Demo Student')}
            className="mt-4 text-gray-500 hover:text-primary transition-colors"
          >
            Continue as Demo Student
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-bg">
      <Header
        studentName={studentName}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'today' && (
          <TodayMenu
            ratedDishes={ratedDishes}
            onRate={(dish) => setRatingModal(dish)}
            onLogWaste={(dish) => setWasteModal(dish)}
          />
        )}

        {activeTab === 'impact' && (
          <PersonalImpact logs={logs} studentName={studentName} />
        )}

        {activeTab === 'week' && (
          <WeeklyMenu
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        )}

        {activeTab === 'chat' && (
          <NutritionistChat
            studentName={studentName}
            logs={logs}
            favorites={favorites}
          />
        )}
      </main>

      {/* Rating Modal */}
      {ratingModal && (
        <RatingModal
          dish={ratingModal}
          onSubmit={handleRatingSubmit}
          onClose={() => setRatingModal(null)}
        />
      )}

      {/* Waste Logger Modal */}
      {wasteModal && (
        <WasteLogger
          dish={wasteModal}
          onSubmit={handleWasteSubmit}
          onClose={() => setWasteModal(null)}
        />
      )}

      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
          <div className={`px-6 py-4 rounded-2xl shadow-lg text-white font-medium ${
            showSuccess === 'zero-waste' ? 'bg-success' :
            showSuccess === 'rating' ? 'bg-primary' : 'bg-secondary'
          }`}>
            {showSuccess === 'zero-waste' && '🎉 Zero waste hero! Amazing job!'}
            {showSuccess === 'rating' && '⭐ Thanks for rating! Your feedback helps improve meals.'}
            {showSuccess === 'waste' && '📊 Waste logged! Every bit of data helps.'}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
