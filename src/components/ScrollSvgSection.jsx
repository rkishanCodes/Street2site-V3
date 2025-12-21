import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollSvgSection = ({
  children,
  pathD = "M120,120 Q380,280 520,420 Q680,580 920,720 Q1080,880 820,1040 Q560,1200 880,1360 Q1200,1520 940,1680 Q680,1840 1000,2000 Q1320,2160 1060,2320",
  accentColor = "#667eea",
}) => {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const particlesRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const path = pathRef.current;
    const particles = particlesRef.current;
    const glow = glowRef.current;

    if (!path || !container) return;

    // MAIN PATH - Stroke reveal
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.style.stroke = accentColor;
    path.style.strokeWidth = "10";
    path.style.strokeLinecap = "round";
    path.style.strokeLinejoin = "round";

    // GLOW LAYER - FIXED
    if (glow) {
      glow.style.stroke = `${accentColor}40`;
      glow.style.strokeWidth = "20";
      glow.style.opacity = "0";
    }

    // MASTER TIMELINE - FIXED
    const masterTL = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
      },
    });

    masterTL
      .to(
        path,
        {
          strokeDashoffset: 0,
          duration: 1,
          ease: "none",
        },
        0
      )
      .to(
        glow,
        {
          opacity: 0.6,
          strokeWidth: 28,
          duration: 1,
          ease: "none",
        },
        0
      );

    // PARTICLES - SIMPLIFIED & FIXED
    if (particles && particles.children.length > 0) {
      gsap.to(particles.children, {
        motionPath: {
          path: path,
          autoRotate: true,
          align: path,
        },
        duration: 1,
        ease: "none",
        stagger: 0.05,
      });
    }

    return () => {
      masterTL.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [accentColor, pathD]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden min-h-[200vh]"
    >
      {/* MULTI-LAYER SVG - FIXED */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1400 2800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[140%] h-full translate-x-[-10%]"
          preserveAspectRatio="none"
        >
          {/* GLOW LAYER */}
          <path
            ref={glowRef}
            d={pathD}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* MAIN PATH */}
          <path
            ref={pathRef}
            d={pathD}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* SIMPLIFIED PARTICLES - FIXED */}
          <g ref={particlesRef}>
            {Array.from({ length: 8 }).map((_, i) => (
              <circle
                key={i}
                cx="0"
                cy="0"
                r="3"
                fill={accentColor}
                opacity="0.7"
              />
            ))}
          </g>
        </svg>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 h-full pt-32 px-8 max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default ScrollSvgSection;
