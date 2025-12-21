const FeatureCards = () => (
  <div className="max-w-7xl mx-auto px-8 py-32">
    <div className="text-center mb-32 max-w-4xl mx-auto">
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.03em] bg-gradient-to-r from-[#1a1a1a] to-[#667eea] bg-clip-text text-transparent mb-8">
        Scroll-driven
        <br />
        <span className="text-[#667eea]">storytelling</span>
      </h2>
      <div className="h-px w-24 bg-gradient-to-r from-[#667eea] to-transparent mx-auto mb-8" />
      <p className="text-xl md:text-2xl text-neutral-500 max-w-2xl mx-auto">
        Custom SVG paths reveal your story as users scroll. Pure craft.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div className="feature-card group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-6 hover:scale-[1.02] hover:bg-white/20">
        <div className="w-20 h-20 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500 mx-auto">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-black mb-6 text-[#1a1a1a] group-hover:text-[#667eea] transition-colors text-center">
          Lightning Fast
        </h3>
        <p className="text-lg text-neutral-600 text-center">
          7-14 days from idea to live
        </p>
      </div>

      <div className="feature-card group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-6 hover:scale-[1.02] hover:bg-white/20">
        <div className="w-20 h-20 bg-gradient-to-br from-[#667eea] to-[#f093fb] rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500 mx-auto">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-black mb-6 text-[#1a1a1a] group-hover:text-[#667eea] transition-colors text-center">
          Pure Craft
        </h3>
        <p className="text-lg text-neutral-600 text-center">
          GSAP + ScrollTrigger magic
        </p>
      </div>

      <div className="feature-card group md:col-span-2 lg:col-span-1 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-6 hover:scale-[1.02] hover:bg-white/20">
        <div className="w-20 h-20 bg-gradient-to-br from-[#667eea] to-[#4facfe] rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500 mx-auto">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-black mb-6 text-[#1a1a1a] group-hover:text-[#667eea] transition-colors text-center">
          Performance First
        </h3>
        <p className="text-lg text-neutral-600 text-center">
          React/Next.js + SEO optimized
        </p>
      </div>
    </div>
  </div>
);

export default FeatureCards;
