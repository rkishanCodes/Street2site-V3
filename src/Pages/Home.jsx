// HomePage.jsx - Clean component-based architecture with scroll animation
import React, { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import ProjectsSection from "../components/ProjectsSection";
import ServicesSection from "../components/ServicesSection";

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
      ease: "power1.out",
      scrollTrigger: {
        trigger: spotlightRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
        anticipatePin: 1,
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

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-white via-orange-50/30 to-white text-slate-900 antialiased">
      {/* Hero Section */}
      <Hero />

      {/* Scroll Animation Section with Components */}
      <section
        ref={spotlightRef}
        className="relative min-h-[400vh] overflow-hidden bg-gradient-to-b from-white via-orange-50/40 to-white"
      >
        {/* Animated SVG Path Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 520 840"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter
                id="roundStroke"
                x="-60%"
                y="-60%"
                width="220%"
                height="220%"
              >
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="18"
                  floodColor="#f97316"
                  floodOpacity="0.6"
                />
              </filter>
            </defs>

            <g transform="translate(20, 0) scale(1.05, 1)">
              <path
                ref={pathRef}
                d="M57.1881 19.8316C57.1881 19.8316 411.188 65.8316 407.188 229.832C403.188 393.832 -5.81189 139.832 23.1881 356.832C52.1881 573.832 433.688 961.832 416.188 573.832C398.688 185.832 16.1881 713.832 16.1881 713.832"
                fill="none"
                stroke="#f97316"
                strokeWidth="80"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="1"
                filter="url(#roundStroke)"
              />
            </g>
          </svg>
        </div>

        {/* Content - Components layered on top */}
        <div className="relative z-10">
          <HowItWorks />
          <ProjectsSection />
          <ServicesSection />
        </div>
      </section>

      {/* Outro Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-orange-800 to-orange-900" />

        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-700 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-700 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
