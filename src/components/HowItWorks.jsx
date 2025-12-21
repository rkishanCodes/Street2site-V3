import React from "react";

const steps = [
  {
    title: "Share your idea",
    body: "Tell us what you want to launch – moodboard, reference links, or just a rough sketch.",
  },
  {
    title: "We map & design",
    body: "We turn your idea into structure, wireframes and visual direction tailored to your brand.",
  },
  {
    title: "We build & animate",
    body: "Production-ready React / Next.js frontend with SVG-driven scroll animations.",
  },
  {
    title: "Launch & refine",
    body: "We deploy, monitor and iterate based on real-world usage and feedback.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
            How Street2Site works
          </h2>
          <p className="text-neutral-600">
            A simple, opinionated pipeline from raw idea to live site, optimised
            for small teams and fast launches.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md border border-neutral-200 p-6 flex flex-col gap-3"
            >
              <span className="text-xs font-semibold text-streetAccent uppercase">
                Step {i + 1}
              </span>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-neutral-600">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
