// ServicesSection.jsx - Premium redesign with feature-rich cards
import { motion } from "framer-motion";

const services = [
  {
    name: "Launch Landing Page",
    short: "Single-page launch site with custom scroll narrative.",
    details: ["Copy & layout guidance", "Responsive build", "Basic analytics"],
    price: "Starting at $2,500",
    icon: "🎯",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    name: "Full Site (3–5 pages)",
    short: "A small but complete marketing site tied to your brand story.",
    details: [
      "Home + up to 4 subpages",
      "CMS-ready structure",
      "Performance focus",
    ],
    price: "Starting at $5,000",
    icon: "🏗️",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Ongoing improvements",
    short: "Iteration, experiments, and new sections post-launch.",
    details: [
      "Animation tweaks",
      "New sections & components",
      "A/B test hooks",
    ],
    price: "Flexible retainer",
    icon: "🔄",
    gradient: "from-purple-500 to-pink-500",
  },
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section id="services" className="relative py-32 md:py-40 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(251, 146, 60, 0.15) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
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
            Services built around launch
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
            Packages scoped for small teams who need speed, clarity and quality.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={itemVariants}
              whileHover={{
                y: -12,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-white rounded-3xl shadow-xl border-2 border-slate-100 p-8 flex flex-col gap-5 hover:shadow-2xl hover:border-orange-200 transition-all duration-500"
            >
              {/* Icon & Gradient Background */}
              <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden rounded-3xl opacity-10">
                <div className={`w-full h-full bg-gradient-to-br ${service.gradient}`} />
              </div>

              {/* Icon */}
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30 text-3xl">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative flex-1">
                <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-orange-900 transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed mb-5">
                  {service.short}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-sm text-slate-700">
                      <svg
                        className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div className="relative pt-5 border-t border-slate-100">
                <p className="text-sm font-bold text-orange-600 uppercase tracking-wide">
                  {service.price}
                </p>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/0 to-orange-400/0 group-hover:from-orange-500/5 group-hover:to-orange-400/5 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-slate-600 mb-6">
            Need something custom? Let's talk about your project.
          </p>
          <motion.button
            whileHover={{
              scale: 1.02,
              boxShadow: "0 12px 32px rgba(255, 131, 67, 0.25)",
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-600/20 transition-all hover:bg-orange-700"
          >
            Get in touch
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
