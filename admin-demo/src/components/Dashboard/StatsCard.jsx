function StatsCard({ title, value, subtitle, icon, trend, trendValue, color = "primary" }) {
  const colorClasses = {
    primary: "bg-primary",
    success: "bg-success",
    warning: "bg-warning",
    secondary: "bg-secondary",
    accent: "bg-accent"
  };

  const trendColors = {
    up: "text-success",
    down: "text-warning",
    stable: "text-gray-500"
  };

  const trendIcons = {
    up: "↑",
    down: "↓",
    stable: "→"
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">{value}</p>
          {subtitle && <p className="text-gray-400 text-sm mt-1">{subtitle}</p>}
          {trend && (
            <p className={`text-sm mt-2 ${trendColors[trend]}`}>
              {trendIcons[trend]} {trendValue}
            </p>
          )}
        </div>
        <div className={`${colorClasses[color]} w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl`}>
          {icon}
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
