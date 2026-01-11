import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-background border border-border shadow-sm mb-8"
          >
            <span className="text-base">Hi I'm Somya</span>
            <span className="text-xl">👋</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-10 leading-[1.1]"
          >
            I design apps, and websites that create impact
          </motion.h1>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#about"
              className="inline-flex items-center justify-center px-10 py-4 bg-transparent text-[#1e1b4b] font-semibold text-base rounded-full border-2 border-[#1e1b4b] hover:bg-[#1e1b4b] hover:text-white transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              About me
            </motion.a>
            <motion.a
              href="#work"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#1e1b4b] text-white font-semibold text-base rounded-full hover:bg-[#2d2a5e] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              My work
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
