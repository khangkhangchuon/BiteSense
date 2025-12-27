function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[#053929]">
      <div className="flex items-center justify-between">
        {/* Bite Sense Logo - Left */}
        <h1 className="hero-word text-3xl md:text-4xl">
          Bite Sense
        </h1>

        {/* Contact Info - Right */}
        <div className="flex items-center gap-6 text-white text-sm md:text-base">
          <a href="tel:0971386309" className="hover:opacity-80 transition-opacity">
            0971386309
          </a>
          <a href="mailto:phuckhangchuon@gmail.com" className="hover:opacity-80 transition-opacity">
            phuckhangchuon@gmail.com
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
