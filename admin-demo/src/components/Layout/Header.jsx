function Header({ title, subtitle }) {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="bg-white border-b border-gray-200 px-8 py-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary-dark">{title}</h1>
          {subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-6">
          <p className="text-gray-500 text-sm">{today}</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-dark flex items-center justify-center text-white font-bold">
              A
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Admin User</p>
              <p className="text-xs text-gray-500">Cafeteria Manager</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
