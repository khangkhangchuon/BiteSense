function Hero() {
  const adminDemoUrl = "http://localhost:5174";
  const studentDemoUrl = "http://localhost:5175";

  return (
    <section className="min-h-screen flex flex-col px-8 md:px-16 lg:px-24 py-8">
      {/* BiteSense Branding - Top */}
      <div className="mb-16">
        <h1 className="hero-word text-4xl md:text-5xl lg:text-6xl">
          BiteSense
        </h1>
      </div>

      {/* Centered Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        {/* 3 Big Words - Horizontal */}
        <div className="mb-10 flex flex-wrap justify-center gap-6 md:gap-12">
          <h2 className="hero-word text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-none">
            Predict.
          </h2>
          <h2 className="hero-word text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-none">
            Personalize.
          </h2>
          <h2 className="hero-word text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-none">
            Transform.
          </h2>
        </div>

        {/* Hero Statement */}
        <p className="statement-text text-xl md:text-2xl lg:text-3xl max-w-5xl mb-12 leading-relaxed">
          The system that ends institutional food waste and cafeterias operating blindly. BiteSense delivers predictive intelligence and insight for schools, personalized AI nutrition for students, and transparency for parents.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href={adminDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-demo text-center"
          >
            Admin Demo
          </a>
          <a
            href={studentDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-demo text-center"
          >
            Student Demo
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
