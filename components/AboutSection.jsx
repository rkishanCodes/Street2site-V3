"use client";
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-[1.1fr,0.9fr] items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
            Why Street2Site?
          </h2>
          <p className="text-neutral-600 mb-4">
            Street2Site is a small, developer-led studio focused on expressive,
            scroll-driven frontends. No bloated templates, no generic themes –
            just fast, custom builds that feel like you.
          </p>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li>• Frontend-first mindset with production experience</li>
            <li>• SVG and scroll animation baked into the process</li>
            <li>• Performance and accessibility as default, not extras</li>
          </ul>
        </div>
        <div className="justify-self-center">
          <div className="w-40 h-40 rounded-full bg-neutral-200 flex items-center justify-center">
            <span className="text-neutral-500 text-xs">Founder / Avatar</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
