"use client";
import React from "react";

const testimonials = [
  {
    quote:
      "Street2Site took a rough idea and shipped a launch-ready site faster than our team could draft a spec.",
    name: "Client Name",
    role: "Founder, Small Brand",
  },
  {
    quote:
      "The scroll animations made our drop feel like an experience, not just another page.",
    name: "Creator Name",
    role: "Content creator",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
            What clients say
          </h2>
          <p className="text-neutral-600">
            A few words from the people who trusted Street2Site with their
            launch.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md border border-neutral-200 p-6 flex flex-col gap-3"
            >
              <p className="text-sm text-neutral-700 italic">“{t.quote}”</p>
              <figcaption className="text-sm text-neutral-600">
                <span className="font-semibold">{t.name}</span> · {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
