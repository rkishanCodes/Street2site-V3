import React from "react";

const services = [
  {
    name: "Launch Landing Page",
    short: "Single-page launch site with custom scroll narrative.",
    details: ["Copy & layout guidance", "Responsive build", "Basic analytics"],
  },
  {
    name: "Full Site (3–5 pages)",
    short: "A small but complete marketing site tied to your brand story.",
    details: [
      "Home + up to 4 subpages",
      "CMS-ready structure",
      "Performance focus",
    ],
  },
  {
    name: "Ongoing improvements",
    short: "Iteration, experiments, and new sections post-launch.",
    details: [
      "Animation tweaks",
      "New sections & components",
      "A/B test hooks",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
            Services built around launch
          </h2>
          <p className="text-neutral-600">
            Packages scoped for small teams who need speed, clarity and quality.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.name}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md border border-neutral-200 p-6 flex flex-col gap-3"
            >
              <h3 className="text-lg font-semibold">{s.name}</h3>
              <p className="text-sm text-neutral-600">{s.short}</p>
              <ul className="mt-2 space-y-1 text-sm text-neutral-600">
                {s.details.map((d) => (
                  <li key={d}>• {d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
