import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Hero3D } from './Hero3D';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50" />
      
      {/* 3D Background - very subtle */}
      <div className="absolute inset-0 opacity-10">
        <Hero3D />
      </div>

      {/* Animated blobs - more fluid */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-pink-200/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-200/15 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />

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
              <span className="block font-medium bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
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
            <a
              href="#work"
              className="group px-10 py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full font-light text-lg transition-all duration-700 hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-300/30"
            >
              View Work
              <span className="ml-2 inline-block transition-transform duration-500 group-hover:translate-x-2">→</span>
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
        >
          <ArrowDown className="w-5 h-5 text-purple-300" />
        </motion.div>
      </motion.div>
    </section>
  );
};
