import React from "react";

const projects = [
  {
    title: "Creator Launch Page",
    desc: "High-converting landing page for a content creator, built in 7 days.",
    tag: "React · Tailwind · GSAP",
  },
  {
    title: "Local Brand Website",
    desc: "Streetwear brand site with scroll-driven storytelling and product highlights.",
    tag: "Next.js · Animations",
  },
  {
    title: "Event Drop Microsite",
    desc: "One-off drop microsite with time-based reveal and SVG line interactions.",
    tag: "Jamstack · SVG",
  },
];

const ProjectsSection = () => {
  return (
    <section id="work" className="py-24">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
            Selected work
          </h2>
          <p className="text-neutral-600">
            A glimpse at the type of small-but-focused builds Street2Site
            specialises in.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md border border-neutral-200 p-6 flex flex-col gap-3"
            >
              <div className="aspect-video rounded-xl bg-neutral-100 mb-3" />
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-neutral-600">{project.desc}</p>
              <p className="text-xs font-medium text-neutral-500">
                {project.tag}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
