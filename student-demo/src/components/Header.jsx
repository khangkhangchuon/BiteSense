function Header({ studentName, activeTab, onTabChange }) {
  const tabs = [
    { id: 'today', label: "Today's Menu", icon: '🍽️' },
    { id: 'impact', label: 'My Impact', icon: '🌱' },
    { id: 'week', label: 'This Week', icon: '📅' },
    { id: 'chat', label: 'AI Chat', icon: '🤖' },
  ];

  return (
    <header className="bg-primary-dark text-white">
      {/* Top Bar */}
      <div className="px-6 py-4 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🥗</span>
          <h1 className="text-2xl font-bold">BiteSense</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="font-medium">{studentName}</p>
            <p className="text-sm text-white/70">Wellspring International</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-lg font-bold">
            {studentName.charAt(0)}
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <nav className="px-6">
        <div className="flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-6 py-3 font-medium transition-all rounded-t-lg ${
                activeTab === tab.id
                  ? 'bg-gray-bg text-primary-dark'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
