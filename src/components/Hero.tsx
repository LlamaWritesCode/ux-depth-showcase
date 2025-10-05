import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Hero3D } from './Hero3D';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Hero3D />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6">
              <span className="block text-foreground">Design</span>
              <span className="block bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 font-light"
          >
            Crafting beautiful, intuitive digital experiences that merge creativity with functionality
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#work"
              className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View My Work
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-primary text-primary rounded-full font-medium text-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};
