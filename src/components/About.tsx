import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/20 to-transparent" />
      
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
            <div className="w-16 h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 text-lg md:text-xl text-muted-foreground/80 leading-relaxed font-light text-center"
          >
            <p>
              I'm a UX/UI and Product Designer with a passion for creating exceptional digital experiences.
            </p>
            <p>
              My approach combines user-centered design thinking with a deep understanding of modern technology.
            </p>
            <p>
              I believe great design is invisible—it simply works.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 grid grid-cols-3 gap-12 text-center"
          >
            {[
              { label: 'Experience', value: '5+ Years' },
              { label: 'Projects', value: '50+' },
              { label: 'Clients', value: '30+' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-light text-purple-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
