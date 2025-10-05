import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">
              About Me
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg md:text-xl text-muted-foreground font-light leading-relaxed"
          >
            <p>
              I'm a UX/UI and Product Designer with a passion for creating exceptional digital experiences.
              With over 5 years of experience, I've worked with startups and established companies to bring
              their visions to life.
            </p>
            <p>
              My approach combines user-centered design thinking with a deep understanding of modern
              technology. I believe great design is invisible—it simply works, delighting users while
              achieving business goals.
            </p>
            <p>
              When I'm not designing, you'll find me exploring the latest design trends, experimenting
              with new tools, or sharing knowledge with the design community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: 'Years Experience', value: '5+' },
              { label: 'Projects Completed', value: '50+' },
              { label: 'Happy Clients', value: '30+' },
              { label: 'Awards Won', value: '12' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
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
