function WasteRateDisplay({ current, baseline, target }) {
  const improvement = baseline - current;
  const progressToTarget = ((baseline - current) / (baseline - target)) * 100;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Waste Rate Progress</h3>

      <div className="flex items-center justify-between mb-6">
        {/* Baseline */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">Baseline</p>
          <p className="text-2xl font-bold text-warning">{baseline}%</p>
          <p className="text-xs text-gray-400">Sep 2024</p>
        </div>

        {/* Arrow */}
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="w-full h-2 bg-gray-100 rounded-full relative">
            <div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-warning via-accent to-success rounded-full transition-all duration-1000"
              style={{ width: `${Math.min(progressToTarget, 100)}%` }}
            />
          </div>
        </div>

        {/* Current */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">Current</p>
          <p className="text-3xl font-bold text-primary">{current}%</p>
          <p className="text-xs text-gray-400">Today</p>
        </div>

        {/* Arrow to Target */}
        <div className="flex items-center px-4">
          <span className="text-2xl text-gray-300">→</span>
        </div>

        {/* Target */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">Target</p>
          <p className="text-2xl font-bold text-success">{target}%</p>
          <p className="text-xs text-gray-400">Goal</p>
        </div>
      </div>

      <div className="bg-primary/10 rounded-lg p-4 flex items-center gap-3">
        <span className="text-2xl">🎉</span>
        <div>
          <p className="text-primary-dark font-semibold">
            {improvement.toFixed(1)}% reduction achieved!
          </p>
          <p className="text-gray-600 text-sm">
            {progressToTarget.toFixed(0)}% of the way to your target
          </p>
        </div>
      </div>
    </div>
  );
}

export default WasteRateDisplay;
