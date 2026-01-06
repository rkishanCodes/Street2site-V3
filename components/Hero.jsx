"use client";
// Hero.jsx - Modern minimal hero inspired by Google/Stripe/Linear
import { motion } from "framer-motion";
import HeroLogo from "./HeroLogo";

export default function Hero() {
  // Animation variants - subtle and refined
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] // Subtle easing
      }
    }
  };

  const headlineVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white via-orange-50/30 to-white overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-orange-100 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-orange-50 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 px-6 py-20 md:flex-row md:gap-16 md:py-32 lg:gap-20">
        {/* Text content */}
        <motion.div 
          className="max-w-2xl space-y-8 text-center md:text-left z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
      
          <motion.h1 
            variants={headlineVariants}
            className="text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] text-slate-900 tracking-tight"
          >
            Build modern{" "}
            <span className="text-orange-600">digital products</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-600 leading-relaxed font-normal max-w-xl"
          >
            We craft stunning web apps, desktop applications, CRM systems, and SaaS products that users love.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 md:justify-start pt-2"
          >
            <motion.button
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 12px 32px rgba(255, 131, 67, 0.25)"
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative rounded-full bg-orange-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-600/20 transition-all hover:bg-orange-700"
            >
              <span className="relative z-10">Start Your Project</span>
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.02,
                backgroundColor: "rgba(249, 115, 22, 0.05)"
              }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full border-2 border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 hover:border-slate-300 transition-all"
            >
              View Our Work
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-4 text-sm text-slate-500"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">No-code to full-code</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Launch in weeks</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Premium quality</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Animated logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.3
          }}
          className="w-full max-w-md md:max-w-lg lg:max-w-xl"
        >
          <HeroLogo />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
    </section>
  );
}
