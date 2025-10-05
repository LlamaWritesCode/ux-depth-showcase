import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ScrollHexagons } from './ScrollHexagons';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-40 relative overflow-hidden">
      <ScrollHexagons sectionIndex={0} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-50/20 to-transparent" />
      
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
            <div className="w-16 h-0.5 bg-gradient-to-r from-red-300 to-orange-300 mx-auto rounded-full" />
          </motion.div>

          {/* Glass card */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-300 to-orange-300 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000" />
            
            <div className="relative bg-white/40 backdrop-blur-2xl rounded-3xl p-12 border border-white/20 shadow-2xl">
              <div className="space-y-8 text-lg md:text-xl text-muted-foreground/80 leading-relaxed font-light text-center">
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
                className="mt-16 grid grid-cols-3 gap-8"
              >
                {[
                  { label: 'Experience', value: '5+ Years' },
                  { label: 'Projects', value: '50+' },
                  { label: 'Clients', value: '30+' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="text-center p-4 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/20 hover:bg-white/40 transition-all duration-500"
                  >
                    <div className="text-3xl md:text-4xl font-light text-red-400 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground/60">
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
