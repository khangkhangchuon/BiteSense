import { calculateImpact, calculateStreak, getAnalogies } from '../data/mockData';

function PersonalImpact({ logs, studentName }) {
  const impact = calculateImpact(logs);
  const streak = calculateStreak(logs);
  const analogies = getAnalogies(impact);

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-1">Great job, {studentName}! 🌟</h2>
            <p className="text-white/80">You're making a real difference for the planet.</p>
          </div>
          {streak > 0 && (
            <div className="text-center bg-white/20 rounded-xl px-4 py-3">
              <p className="text-3xl font-bold">🔥 {streak}</p>
              <p className="text-sm text-white/80">day streak</p>
            </div>
          )}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center">
          <p className="text-4xl font-bold text-primary-dark">{impact.mealsLogged}</p>
          <p className="text-gray-500 mt-1">Meals Logged</p>
          <p className="text-2xl mt-2">🍽️</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center">
          <p className="text-4xl font-bold text-primary">{impact.avgWastePercent}%</p>
          <p className="text-gray-500 mt-1">Avg Waste</p>
          <p className="text-sm text-success mt-1">School avg: 18.5%</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center">
          <p className="text-4xl font-bold text-success">{impact.co2Saved}</p>
          <p className="text-gray-500 mt-1">kg CO₂ Saved</p>
          <p className="text-2xl mt-2">🌍</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center">
          <p className="text-4xl font-bold text-secondary">{impact.waterSaved}</p>
          <p className="text-gray-500 mt-1">L Water Saved</p>
          <p className="text-2xl mt-2">💧</p>
        </div>
      </div>

      {/* Environmental Impact Details */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          <span className="mr-2">🌱</span>
          Your Environmental Impact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-success/10 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">🌍</span>
              <div>
                <p className="text-2xl font-bold text-success">{impact.co2Saved} kg</p>
                <p className="text-gray-600 text-sm">CO₂ Prevented</p>
              </div>
            </div>
          </div>
          <div className="bg-secondary/10 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">💧</span>
              <div>
                <p className="text-2xl font-bold text-secondary">{impact.waterSaved} L</p>
                <p className="text-gray-600 text-sm">Water Saved</p>
              </div>
            </div>
          </div>
          <div className="bg-accent/10 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">🌾</span>
              <div>
                <p className="text-2xl font-bold text-accent">{impact.landSaved} m²</p>
                <p className="text-gray-600 text-sm">Land Saved</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fun Analogies */}
      {analogies.length > 0 && (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            <span className="mr-2">✨</span>
            What Your Impact Means
          </h3>
          <div className="space-y-3">
            {analogies.map((analogy, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 text-lg">
                {analogy}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          <span className="mr-2">📊</span>
          Recent Activity
        </h3>
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {logs.slice(-10).reverse().map((log, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{'⭐'.repeat(log.rating)}</span>
                <div>
                  <p className="font-medium text-gray-800">Dish #{log.dish_id}</p>
                  <p className="text-sm text-gray-500">{log.date}</p>
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                log.waste_percent === 0 ? 'bg-success/10 text-success' :
                log.waste_percent <= 10 ? 'bg-primary/10 text-primary' :
                log.waste_percent <= 25 ? 'bg-accent/10 text-accent' :
                'bg-warning/10 text-warning'
              }`}>
                {log.waste_percent}% waste
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Motivation */}
      <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-6 text-center">
        <p className="text-xl font-medium text-gray-700">
          "Every bite matters. Together, we're reducing food waste one meal at a time!" 💪
        </p>
      </div>
    </div>
  );
}

export default PersonalImpact;
