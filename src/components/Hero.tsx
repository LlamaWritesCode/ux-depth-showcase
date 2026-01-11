import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Edition badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-background border border-border shadow-sm mb-8"
          >
            <span className="text-base">Portfolio Edition • 2026</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
          >
            Somya Singh<br />
            <span className="text-muted-foreground">UX Designer</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Crafting user-centered experiences through research-driven design, accessibility, and cross-functional collaboration
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-16"
          >
            <motion.a
              href="#about"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#1e1b4b] text-white font-semibold text-base rounded-full hover:bg-[#2d2a5e] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Portfolio →
            </motion.a>
          </motion.div>

          {/* Stats cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto"
          >
            <div className="bg-background rounded-2xl p-6 border border-border shadow-sm text-left">
              <p className="text-lg font-semibold mb-1">Master's in Information Systems</p>
              <p className="text-muted-foreground">University of Maryland</p>
              <p className="text-sm text-muted-foreground mt-2">Data Science, HCI & UX Design</p>
              <p className="text-xs text-muted-foreground/70 mt-1">Focus Areas</p>
            </div>
            <div className="bg-background rounded-2xl p-6 border border-border shadow-sm text-left">
              <p className="text-lg font-semibold mb-1">Google & IBM</p>
              <p className="text-muted-foreground">Certified</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
