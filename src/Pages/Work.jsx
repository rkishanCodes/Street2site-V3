import React from "react";
import ScrollSvgSection from "../components/ScrollSvgSection";

const Work = () => {
  const projects = [
    { title: "Creator Launch", tag: "React + GSAP", color: "#667eea" },
    { title: "Brand Site", tag: "Next.js", color: "#764ba2" },
    { title: "Drop Microsite", tag: "SVG Animations", color: "#f093fb" },
  ];

  return (
    <div>
      <section className="min-h-screen flex items-center px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Work</h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Small but impactful projects with scroll-driven narratives.
          </p>
        </div>
      </section>

      <ScrollSvgSection pathD="M100,100 Q400,200 600,400 T900,800 Q1100,1000 800,1200 T600,1600 Q400,1800 800,2000">
        <div className="max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-neutral-200"
              style={{ borderLeftColor: project.color }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl mb-6" />
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-sm text-neutral-600 uppercase tracking-wider font-medium">
                {project.tag}
              </p>
            </div>
          ))}
        </div>
      </ScrollSvgSection>
    </div>
  );
};

export default Work;
