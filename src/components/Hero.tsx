import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

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
            className="relative inline-block"
          >
            {/* Animated glow rings */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                background: 'radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />
            
            {/* Main button */}
            <motion.a
              href="#work"
              className="group relative px-12 py-5 overflow-hidden rounded-full inline-flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.9) 0%, rgba(249, 115, 22, 0.9) 100%)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: '2px solid rgba(255, 255, 255, 0.4)',
                boxShadow: '0 20px 60px -15px rgba(239, 68, 68, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
              }}
            >
              {/* Animated sparkle */}
              <motion.div
                animate={{
                  rotate: [0, 180, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="w-5 h-5 text-white" />
              </motion.div>
              
              <span className="relative z-10 text-white font-medium text-lg">View My Work</span>
              
              <motion.span 
                className="inline-block text-white"
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
              
              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{
                  x: ['-200%', '200%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 1,
                }}
              />
            </motion.a>
          </motion.div>
        </div>
      </div>

    </section>
  );
};
