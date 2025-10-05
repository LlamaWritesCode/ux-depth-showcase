import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Hero3D } from './Hero3D';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50" />
      
      {/* 3D Background - more subtle */}
      <div className="absolute inset-0 opacity-20">
        <Hero3D />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/60 backdrop-blur-sm border border-purple-200/50"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-muted-foreground">Available for freelance work</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance">
              <span className="block text-foreground mb-2">Hey there! ✌️</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                I'm a Designer
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 font-light leading-relaxed"
          >
            Crafting beautiful, intuitive digital experiences that blend creativity with purpose
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#work"
              className="group px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-purple-300/50"
            >
              View My Work
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/60 backdrop-blur-sm border-2 border-purple-200 text-foreground rounded-full font-medium text-lg transition-all duration-300 hover:bg-white hover:border-purple-300 hover:scale-105"
            >
              Say Hello
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-6 h-6 text-purple-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};
