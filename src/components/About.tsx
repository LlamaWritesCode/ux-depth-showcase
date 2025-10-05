import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ScrollHexagons } from './ScrollHexagons';
import { Background3D } from './Background3D';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-40 relative overflow-hidden">
      <Background3D />
      <ScrollHexagons sectionIndex={0} />
      {/* Richer background for glass effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-100/50 via-red-100/50 to-pink-100/50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-300 to-red-300 opacity-20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-300 to-rose-300 opacity-20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-light mb-8 text-foreground/90">
              About
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-red-400 to-orange-400 mx-auto rounded-full" />
          </motion.div>

          {/* Enhanced Glass card */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-orange-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000" />
            
            <div 
              className="relative rounded-3xl p-12 shadow-2xl"
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(30px) saturate(180%)',
                WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 32px 0 rgba(252, 165, 165, 0.15), inset 0 1px 1px 0 rgba(255, 255, 255, 0.4)',
              }}
            >
              <div className="space-y-8 text-lg md:text-xl text-foreground/80 leading-relaxed font-light text-center">
                <p>
                  I'm a UX/UI and Product Designer with a passion for creating exceptional digital experiences.
                </p>
                <p>
                  My approach combines user-centered design thinking with a deep understanding of modern technology.
                </p>
                <p>
                  I believe great design is invisible—it simply works.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mt-16 grid grid-cols-3 gap-6"
              >
                {[
                  { label: 'Experience', value: '5+ Years' },
                  { label: 'Projects', value: '50+' },
                  { label: 'Clients', value: '30+' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="text-center p-6 rounded-2xl cursor-pointer"
                    style={{
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 4px 16px 0 rgba(252, 165, 165, 0.1)',
                    }}
                  >
                    <div className="text-3xl md:text-4xl font-light text-red-500 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground/70">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
