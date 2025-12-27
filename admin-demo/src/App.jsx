import { useState } from 'react';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import StatsCard from './components/Dashboard/StatsCard';
import WasteRateDisplay from './components/Dashboard/WasteRateDisplay';
import WasteTrendChart from './components/Dashboard/WasteTrendChart';
import DishPerformanceTable from './components/Dashboard/DishPerformanceTable';
import EnvironmentalImpact from './components/Dashboard/EnvironmentalImpact';
import RecommendationCard from './components/Recommendations/RecommendationCard';
import {
  schoolData,
  dishes,
  weeklyData,
  recommendations,
  environmentalImpact,
  getPendingRecommendations,
  formatVND
} from './data/mockData';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const pendingRecs = getPendingRecommendations();

  const pageConfig = {
    dashboard: { title: 'Dashboard', subtitle: 'Overview of your cafeteria performance' },
    analytics: { title: 'Analytics', subtitle: 'Deep dive into waste patterns and trends' },
    menu: { title: 'Menu Management', subtitle: 'Manage your weekly menu and dishes' },
    recommendations: { title: 'AI Recommendations', subtitle: 'Smart suggestions to reduce waste' },
    students: { title: 'Student Engagement', subtitle: 'Track student participation and feedback' }
  };

  return (
    <div className="flex min-h-screen bg-gray-bg">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="flex-1 flex flex-col">
        <Header
          title={pageConfig[activeTab].title}
          subtitle={pageConfig[activeTab].subtitle}
        />

        <div className="flex-1 p-8 overflow-auto">
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              {/* Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard
                  title="Current Waste Rate"
                  value={`${schoolData.current_waste_rate}%`}
                  subtitle={`Target: ${schoolData.target_waste_rate}%`}
                  icon="📉"
                  trend="down"
                  trendValue={`${(schoolData.baseline_waste_rate - schoolData.current_waste_rate).toFixed(1)}% from baseline`}
                  color="primary"
                />
                <StatsCard
                  title="Monthly Savings"
                  value={formatVND(schoolData.monthly_savings)}
                  subtitle="Compared to baseline"
                  icon="💰"
                  trend="up"
                  trendValue="12% from last month"
                  color="success"
                />
                <StatsCard
                  title="Active Students"
                  value={schoolData.active_students}
                  subtitle={`of ${schoolData.total_students} total`}
                  icon="👥"
                  trend="up"
                  trendValue="86% participation"
                  color="secondary"
                />
                <StatsCard
                  title="Pending Actions"
                  value={pendingRecs.length}
                  subtitle="AI recommendations"
                  icon="🤖"
                  color="accent"
                />
              </div>

              {/* Waste Rate Progress */}
              <WasteRateDisplay
                current={schoolData.current_waste_rate}
                baseline={schoolData.baseline_waste_rate}
                target={schoolData.target_waste_rate}
              />

              {/* Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <WasteTrendChart data={weeklyData} target={schoolData.target_waste_rate} />
                <EnvironmentalImpact data={environmentalImpact} />
              </div>

              {/* Dish Performance */}
              <DishPerformanceTable dishes={dishes} />
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-8">
              <WasteTrendChart data={weeklyData} target={schoolData.target_waste_rate} />
              <DishPerformanceTable dishes={dishes} />
            </div>
          )}

          {activeTab === 'menu' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">This Week's Menu</h3>
                <div className="grid grid-cols-5 gap-4">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                    <div key={day} className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-primary-dark mb-3">{day}</h4>
                      <div className="space-y-2">
                        {[1, 2, 3].map((i) => {
                          const dish = dishes[Math.floor(Math.random() * dishes.length)];
                          return (
                            <div key={i} className="bg-white rounded p-2 text-sm">
                              <p className="font-medium text-gray-800">{dish.name_vi}</p>
                              <p className="text-gray-500 text-xs">{dish.name_en}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <DishPerformanceTable dishes={dishes} />
            </div>
          )}

          {activeTab === 'recommendations' && (
            <div className="space-y-6">
              <div className="bg-primary/10 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">🤖</span>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-dark">AI-Powered Insights</h3>
                    <p className="text-gray-600">
                      Our AI analyzes student feedback and waste patterns to suggest actionable improvements.
                      You have <strong>{pendingRecs.length} pending recommendations</strong> to review.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-800">Pending Recommendations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pendingRecs.map((rec) => (
                  <RecommendationCard
                    key={rec.id}
                    recommendation={rec}
                    onAccept={(id) => console.log('Accepted:', id)}
                    onDecline={(id) => console.log('Declined:', id)}
                  />
                ))}
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mt-8">Implemented Recommendations</h3>
              <div className="space-y-4">
                {recommendations.filter(r => r.status === 'accepted').map((rec) => (
                  <div key={rec.id} className="bg-success/10 border border-success/20 rounded-xl p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">✅</span>
                        <div>
                          <p className="font-semibold text-success">{rec.dish_name} - {rec.suggestion}</p>
                          <p className="text-sm text-gray-600">Implemented on {rec.implemented_at}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Result</p>
                        <p className="font-medium text-success">{rec.result}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'students' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatsCard
                  title="Participation Rate"
                  value="86%"
                  subtitle="Students actively logging"
                  icon="📊"
                  color="primary"
                />
                <StatsCard
                  title="Daily Ratings"
                  value="245"
                  subtitle="Average per day"
                  icon="⭐"
                  color="accent"
                />
                <StatsCard
                  title="Streak Champions"
                  value="45"
                  subtitle="7+ day logging streak"
                  icon="🔥"
                  color="warning"
                />
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Contributors (Anonymous)</h3>
                <div className="space-y-3">
                  {[
                    { rank: 1, logs: 78, avgWaste: '5.2%', badge: '🥇' },
                    { rank: 2, logs: 72, avgWaste: '8.1%', badge: '🥈' },
                    { rank: 3, logs: 68, avgWaste: '6.5%', badge: '🥉' },
                    { rank: 4, logs: 65, avgWaste: '7.8%', badge: '4' },
                    { rank: 5, logs: 62, avgWaste: '4.9%', badge: '5' },
                  ].map((student) => (
                    <div
                      key={student.rank}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-2xl w-8 text-center">{student.badge}</span>
                        <div>
                          <p className="font-medium text-gray-800">Student #{student.rank}</p>
                          <p className="text-sm text-gray-500">{student.logs} meals logged</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Avg Waste</p>
                        <p className="font-semibold text-primary">{student.avgWaste}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
