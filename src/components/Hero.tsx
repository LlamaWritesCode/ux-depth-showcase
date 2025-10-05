import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Rich gradient background for glass effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-orange-100 to-pink-100" />

      {/* Animated blobs - stronger colors */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-red-400 to-orange-400 opacity-40 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-orange-400 to-pink-400 opacity-40 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-rose-400 to-red-400 opacity-30 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 text-balance">
              <span className="block text-foreground/90 mb-3">Hey there</span>
              <span className="block font-medium bg-gradient-to-r from-red-500 via-orange-500 to-rose-500 bg-clip-text text-transparent">
                I'm a Designer
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-muted-foreground/80 max-w-2xl mx-auto mb-16 font-light leading-relaxed"
          >
            Creating beautiful, intuitive experiences
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Enhanced glass button */}
            <a
              href="#work"
              className="group relative px-12 py-5 overflow-hidden rounded-full"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 32px 0 rgba(252, 165, 165, 0.2), inset 0 1px 1px 0 rgba(255, 255, 255, 0.3)',
              }}
            >
              <span className="relative z-10 text-foreground font-light text-lg">View Work</span>
              <span className="ml-2 inline-block transition-transform duration-500 group-hover:translate-x-2">→</span>
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8 }}
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2"
          style={{
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-red-400"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
