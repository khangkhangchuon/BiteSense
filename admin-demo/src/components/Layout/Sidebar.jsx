import { useState } from 'react';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'analytics', label: 'Analytics', icon: '📈' },
  { id: 'menu', label: 'Menu Management', icon: '🍽️' },
  { id: 'recommendations', label: 'AI Recommendations', icon: '🤖' },
  { id: 'students', label: 'Student Engagement', icon: '👥' },
];

function Sidebar({ activeTab, onTabChange }) {
  return (
    <aside className="w-64 bg-primary-dark min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <h1 className="text-2xl font-bold text-white">BiteSense</h1>
        <p className="text-sm text-white/60 mt-1">Admin Dashboard</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onTabChange(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left ${
                  activeTab === item.id
                    ? 'bg-primary text-white'
                    : 'text-white/80 hover:bg-white/10'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* School Info */}
      <div className="p-4 border-t border-white/10">
        <div className="bg-white/10 rounded-lg p-4">
          <p className="text-white/60 text-xs uppercase tracking-wide">Current School</p>
          <p className="text-white font-semibold mt-1">Wellspring International</p>
          <p className="text-white/60 text-sm">Ho Chi Minh City</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
