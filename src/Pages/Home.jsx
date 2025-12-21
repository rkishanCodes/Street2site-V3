// HomePage.jsx
import React, { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const spotlightRef = useRef(null);
  const pathRef = useRef(null);
  const animationRef = useRef(null);

  const setupAnimation = useCallback(() => {
    if (!pathRef.current || animationRef.current) return;

    const path = pathRef.current;

    if (typeof path.getTotalLength !== "function") {
      console.warn("SVG path not ready, retrying...");
      return false;
    }

    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    if (animationRef.current) {
      animationRef.current.kill();
    }

    animationRef.current = gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: spotlightRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    return true;
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setupAnimation();
    }, 100);

    const interval = setInterval(() => {
      if (setupAnimation()) {
        clearInterval(interval);
      }
    }, 200);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
      if (animationRef.current) animationRef.current.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [setupAnimation]);

  // Figma path
  const pathD =
    "M57.1881 19.8316C57.1881 19.8316 411.188 65.8316 407.188 229.832C403.188 393.832 -5.81189 139.832 23.1881 356.832C52.1881 573.832 433.688 961.832 416.188 573.832C398.688 185.832 16.1881 713.832 16.1881 713.832";

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-amber-50 via-orange-50 to-white text-slate-900 antialiased">
      {/* Intro Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-r from-orange-100 via-amber-100 to-orange-50">
        <h1 className="text-center max-w-3xl text-5xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-orange-900 via-orange-700 to-orange-900 bg-clip-text text-transparent drop-shadow-2xl">
          Real human insights
        </h1>
      </section>

      {/* Spotlight Section */}
      <section
        ref={spotlightRef}
        className="relative min-h-[200vh] md:min-h-[300vh] overflow-hidden py-32 md:py-48 bg-gradient-to-b from-white to-orange-25"
      >
        {/* SVG background - fills viewport, single orange line */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 520 840" // bigger box = more breathing room
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter
                id="roundStroke"
                x="-30%"
                y="-30%"
                width="160%"
                height="160%"
              >
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="12"
                  floodColor="#f97316"
                  floodOpacity="0.6"
                />
              </filter>
            </defs>

            {/* Center + shrink group so line floats away from edges */}
            <g transform="translate(60,40) scale(0.8)">
              <path
                ref={pathRef}
                d="M57.1881 19.8316C57.1881 19.8316 411.188 65.8316 407.188 229.832C403.188 393.832 -5.81189 139.832 23.1881 356.832C52.1881 573.832 433.688 961.832 416.188 573.832C398.688 185.832 16.1881 713.832 16.1881 713.832"
                fill="none"
                stroke="#f97316"
                strokeWidth="40"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="1"
                filter="url(#roundStroke)"
              />
            </g>
          </svg>
        </div>

        {/* Content Rows - sticky so SVG feels pinned */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 2xl:px-0 grid gap-24 md:gap-32 sticky top-0 pt-32 md:pt-48">
          {/* Row 1 */}
          <div className="row flex items-center justify-center">
            <div className="image w-80 h-80 md:w-[28rem] md:h-[28rem] bg-gradient-to-br from-orange-400/30 to-amber-500/30 border-4 border-orange-200/50 rounded-[3rem] shadow-2xl overflow-hidden backdrop-blur-xl">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80"
                alt="Insight 1"
                className="w-full h-full object-cover rounded-[2.5rem]"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="row flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            <div className="card lg:w-1/2 bg-white/90 backdrop-blur-2xl border-2 border-orange-100/70 rounded-[2.5rem] p-10 md:p-16 shadow-2xl hover:shadow-orange-500/25 hover:border-orange-200/80 transition-all duration-700 hover:-translate-y-4 hover:scale-[1.02]">
              <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-900 to-orange-700 bg-clip-text text-transparent mb-8 leading-tight drop-shadow-sm">
                One global partner
              </h2>
              <p className="text-2xl text-slate-700 leading-relaxed font-medium">
                MindMarket delivers global qualitative market research through
                real people who understand local cultures.
              </p>
            </div>
            <div className="image lg:w-1/2">
              <div className="w-full h-96 bg-gradient-to-br from-orange-100/70 to-amber-100/70 border-4 border-orange-200/50 rounded-[2rem] shadow-2xl overflow-hidden backdrop-blur-xl">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1000&q=80"
                  alt="Global insights"
                  className="w-full h-full object-cover rounded-[1.75rem]"
                />
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="row flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-32">
            <div className="image lg:w-1/2">
              <div className="w-full h-96 bg-gradient-to-br from-orange-100/70 to-amber-100/70 border-4 border-orange-200/50 rounded-[2rem] shadow-2xl overflow-hidden backdrop-blur-xl">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
                  alt="Research process"
                  className="w-full h-full object-cover rounded-[1.75rem]"
                />
              </div>
            </div>
            <div className="card lg:w-1/2 bg-white/90 backdrop-blur-2xl border-2 border-orange-100/70 rounded-[2.5rem] p-10 md:p-16 shadow-2xl hover:shadow-orange-500/25 hover:border-orange-200/80 transition-all duration-700 hover:-translate-y-4 hover:scale-[1.02]">
              <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-900 to-orange-700 bg-clip-text text-transparent mb-8 leading-tight drop-shadow-sm">
                One brief. One team.
              </h2>
              <p className="text-2xl text-slate-700 leading-relaxed font-medium">
                Everything managed by a single point of contact from methodology
                to reporting.
              </p>
            </div>
          </div>

          {/* Row 4 */}
          <div className="row flex items-center justify-center">
            <div className="image w-80 h-80 md:w-[28rem] md:h-[28rem] bg-gradient-to-br from-orange-500/30 to-amber-600/30 border-4 border-orange-200/50 rounded-[3rem] shadow-2xl overflow-hidden backdrop-blur-xl">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80"
                alt="Success metrics"
                className="w-full h-full object-cover rounded-[2.5rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Outro Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-r from-orange-900 via-orange-800 to-orange-900 text-white">
        <h1 className="text-center max-w-3xl text-5xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-amber-300 via-orange-200 to-amber-400 bg-clip-text text-transparent drop-shadow-2xl">
          Ready when you are!
        </h1>
      </section>
    </div>
  );
};

export default HomePage;
