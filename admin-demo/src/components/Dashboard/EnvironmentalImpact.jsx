function EnvironmentalImpact({ data }) {
  const impactItems = [
    {
      icon: '🌍',
      value: `${data.total_co2_prevented} kg`,
      label: 'CO₂ Prevented',
      sublabel: `≈ ${data.trees_equivalent} trees planted`,
      color: 'bg-success/10 text-success'
    },
    {
      icon: '💧',
      value: `${data.total_water_saved.toLocaleString()} L`,
      label: 'Water Saved',
      sublabel: `≈ ${Math.round(data.total_water_saved / 150)} showers`,
      color: 'bg-secondary/10 text-secondary'
    },
    {
      icon: '🌾',
      value: `${data.total_land_saved} m²`,
      label: 'Land Saved',
      sublabel: `≈ ${Math.round(data.total_land_saved / 10)} parking spots`,
      color: 'bg-accent/10 text-accent'
    },
    {
      icon: '🍽️',
      value: data.meals_rescued.toLocaleString(),
      label: 'Meals Rescued',
      sublabel: 'From being wasted',
      color: 'bg-primary/10 text-primary'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">🌱</span>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Environmental Impact</h3>
          <p className="text-gray-500 text-sm">Since September 2024</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {impactItems.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl p-4 ${item.color.split(' ')[0]}`}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{item.icon}</span>
              <span className={`text-xl font-bold ${item.color.split(' ')[1]}`}>
                {item.value}
              </span>
            </div>
            <p className="text-gray-700 font-medium">{item.label}</p>
            <p className="text-gray-500 text-sm">{item.sublabel}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EnvironmentalImpact;
