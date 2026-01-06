"use client";
// HeroLogo.jsx - Modern minimal logo for light backgrounds
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroLogo() {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const leftBracketRef = useRef(null);
  const slashRef = useRef(null);
  const rightBracketRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    if (!leftBracketRef.current || !slashRef.current || !rightBracketRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial states for paths
      const paths = [leftBracketRef.current, slashRef.current, rightBracketRef.current];
      
      paths.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      // Create main timeline for symbol animation
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" }
      });

      // Staggered path drawing animation (faster, more subtle)
      tl.to(leftBracketRef.current, {
        strokeDashoffset: 0,
        duration: 0.8,
      }, 0.3)
      .to(slashRef.current, {
        strokeDashoffset: 0,
        duration: 0.7,
      }, 0.45)
      .to(rightBracketRef.current, {
        strokeDashoffset: 0,
        duration: 0.8,
      }, 0.6);

      // Gentle floating animation (no aggressive 3D rotation)
      gsap.to(svgRef.current, {
        y: -8,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      // Subtle opacity pulse
      gsap.to(paths, {
        opacity: 0.9,
        duration: 2.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 0.2,
      });

      // Animate particles with gentle movements
      particlesRef.current.forEach((particle, i) => {
        if (!particle) return;
        
        // Subtle floating animation
        gsap.to(particle, {
          x: `+=${gsap.utils.random(-20, 20)}`,
          y: `+=${gsap.utils.random(-20, 20)}`,
          duration: gsap.utils.random(4, 7),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        // Gentle opacity pulse
        gsap.to(particle, {
          opacity: gsap.utils.random(0.3, 0.7),
          duration: gsap.utils.random(2, 4),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Generate fewer particles for minimal aesthetic (10 instead of 18)
  const particles = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    cx: 200 + Math.cos((i * Math.PI * 2) / 10) * 100,
    cy: 200 + Math.sin((i * Math.PI * 2) / 10) * 80,
    r: gsap.utils.random(2, 4),
  }));

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center"
    >
      {/* Clean white background with subtle shadow */}
      <div className="absolute inset-0  " />
      
      {/* Subtle orange glow */}
      <div className="absolute inset-[15%] bg-gradient-to-br from-orange-50 via-white to-orange-50/50 rounded-2xl blur-xl opacity-60" />

      {/* Animated SVG with </> symbol */}
      <svg 
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 400 400" 
        className="relative w-full h-full z-10"
      >
        <defs>
          {/* Clean gradient for symbols */}
          <linearGradient id="symbolGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ea580c" />
            <stop offset="50%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#fb923c" />
          </linearGradient>

          {/* Subtle shadow filter */}
          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feOffset in="blur" dx="0" dy="2" result="offsetBlur" />
            <feFlood floodColor="#f97316" floodOpacity="0.2" />
            <feComposite in2="offsetBlur" operator="in" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main </> symbol with clean gradient */}
        <g stroke="url(#symbolGradient)" strokeWidth="18" filter="url(#softShadow)">
          {/* Left angle bracket < */}
          <path 
            ref={leftBracketRef}
            d="M140 120 L80 200 L140 280" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* Forward slash / */}
          <path 
            ref={slashRef}
            d="M220 120 L180 280" 
            strokeLinecap="round"
            fill="none"
          />
          
          {/* Right angle bracket > */}
          <path 
            ref={rightBracketRef}
            d="M260 120 L320 200 L260 280" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
          />
        </g>

        {/* Floating particles - fewer and more subtle */}
        <g className="particles">
          {particles.map((p, i) => (
            <circle
              key={p.id}
              ref={(el) => (particlesRef.current[i] = el)}
              cx={p.cx}
              cy={p.cy}
              r={p.r}
              fill={i % 2 === 0 ? "#f97316" : "#fb923c"}
              opacity="0.5"
            />
          ))}
        </g>

        {/* Accent dots at key points */}
        <circle cx="80" cy="200" r="5" fill="#f97316" opacity="0.7" className="animate-pulse" />
        <circle cx="320" cy="200" r="5" fill="#f97316" opacity="0.7" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
      </svg>
    </div>
  );
}
