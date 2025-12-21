const Hero = () => (
  <section className="min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden relative">
    <div className="floating-orb absolute top-1/4 left-10 w-64 h-64 bg-[#667eea]/10 rounded-full blur-3xl -z-10" />
    <div className="floating-orb absolute bottom-1/4 right-20 w-96 h-96 bg-[#667eea]/5 rounded-full blur-3xl -z-10" />

    <div className="max-w-7xl mx-auto text-center relative z-10">
      <div className="space-y-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.05em] leading-[0.9] bg-gradient-to-r from-[#1a1a1a] to-[#667eea] bg-clip-text text-transparent">
          From street idea
          <br />
          <span className="text-[#667eea]">to live site.</span>
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto">
          Custom websites with scroll-driven storytelling.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/work"
            className="group inline-flex items-center px-8 py-4 text-lg font-semibold bg-[#667eea] text-white rounded-2xl hover:bg-[#5a67d8] transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1"
          >
            See work{" "}
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="/services"
            className="px-8 py-4 text-lg font-semibold border-2 border-neutral-200 rounded-2xl hover:bg-neutral-50 transition-all duration-300 hover:shadow-xl"
          >
            Services
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
