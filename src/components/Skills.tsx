import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ScrollHexagons } from './ScrollHexagons';

const skills = [
  'Visual Design',
  'User Research',
  'Prototyping',
  'Design Systems',
  'Interaction Design',
  'Wireframing',
];

const tools = [
  'Figma',
  'Adobe XD',
  'Sketch',
  'Framer',
  'Principle',
  'After Effects',
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-40 relative overflow-hidden">
      <ScrollHexagons sectionIndex={2} />
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50/20 via-orange-50/20 to-red-50/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-6xl font-light mb-8 text-foreground/90">
              Expertise
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-red-300 to-orange-300 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20"
          >
            <h3 className="text-xl font-light text-muted-foreground/60 mb-8 text-center">
              Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="px-6 py-3 bg-white/40 backdrop-blur-sm border border-red-100/50 rounded-full text-foreground/80 font-light transition-all duration-500 hover:bg-white/60 hover:border-red-200"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-xl font-light text-muted-foreground/60 mb-8 text-center">
              Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="px-6 py-3 bg-white/40 backdrop-blur-sm border border-red-100/50 rounded-full text-foreground/80 font-light transition-all duration-500 hover:bg-white/60 hover:border-red-200"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
