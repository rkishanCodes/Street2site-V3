"use client";
// HowItWorks.jsx - Premium redesign with animations
import { motion } from "framer-motion";

const steps = [
  {
    title: "Share your idea",
    body: "Tell us what you want to launch – moodboard, reference links, or just a rough sketch.",
    icon: "💡",
  },
  {
    title: "We map & design",
    body: "We turn your idea into structure, wireframes and visual direction tailored to your brand.",
    icon: "🎨",
  },
  {
    title: "We build & animate",
    body: "Production-ready React / Next.js frontend with SVG-driven scroll animations.",
    icon: "⚡",
  },
  {
    title: "Launch & refine",
    body: "We deploy, monitor and iterate based on real-world usage and feedback.",
    icon: "🚀",
  },
];

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-200 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber-200 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">
            How Street2Site works
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
            A simple, opinionated pipeline from raw idea to live site, optimized
            for small teams and fast launches.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-orange-100/50 p-8 flex flex-col gap-4 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-200 transition-all duration-500"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-400/0 group-hover:from-orange-500/5 group-hover:to-orange-400/5 rounded-3xl transition-all duration-500" />

              {/* Step number */}
              <div className="relative flex items-center justify-between">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white text-sm font-bold shadow-lg shadow-orange-500/30">
                  {i + 1}
                </span>
                <span className="text-5xl" style={{ filter: "grayscale(0.2)" }}>
                  {step.icon}
                </span>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 group-hover:text-orange-900 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  {step.body}
                </p>
              </div>

              {/* Progress indicator */}
              <div className="relative mt-auto pt-4">
                <div className="w-full h-1 bg-orange-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange-500 to-orange-600"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
