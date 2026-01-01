import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { NewspaperDoodles } from './NewspaperDoodles';

const skills = [
  'UX Design',
  'UI Design',
  'Interaction Design',
  'Wireframing',
  'Prototyping',
  'User Research',
  'Usability Testing',
  'Information Architecture',
  'Accessibility (WCAG)',
  'A/B Testing',
  'User Journey Mapping',
  'Heuristic Evaluation',
];

const tools = [
  'Figma',
  'Sketch',
  'InVision',
  'Adobe Illustrator',
  'Adobe InDesign',
  'Adobe Creative Suite',
  'Canva',
  'JIRA',
];

const certifications = [
  'Google UX Design',
  'Google Project Management',
  'IBM IT Scrum Master',
  'IBM Python for Data Science',
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-background border-t-4 border-foreground">
      <NewspaperDoodles />
      
      {/* Newspaper texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,currentColor_2px,currentColor_3px)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="inline-block border-4 border-foreground px-8 py-3 bg-foreground text-background shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300">
              <h2 className="text-5xl md:text-6xl font-serif font-bold tracking-tight">
                Expertise & Tools
              </h2>
            </div>
          </motion.div>

          {/* Skills section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="border-4 border-foreground bg-card p-8">
              <h3 className="text-3xl font-serif font-bold mb-6 pb-4 border-b-2 border-foreground">
                Core Skills
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    className="border-2 border-foreground p-4 text-center font-mono uppercase text-sm tracking-wider hover:bg-foreground hover:text-background transition-all duration-300 cursor-pointer"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tools section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="border-4 border-foreground bg-card p-8">
              <h3 className="text-3xl font-serif font-bold mb-6 pb-4 border-b-2 border-foreground">
                Tools of the Trade
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    className="border-2 border-foreground p-4 text-center font-mono uppercase text-sm tracking-wider hover:bg-foreground hover:text-background transition-all duration-300 cursor-pointer"
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12"
          >
            <div className="border-4 border-foreground bg-card p-8">
              <h3 className="text-3xl font-serif font-bold mb-6 pb-4 border-b-2 border-foreground">
                Certifications
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                    className="border-2 border-foreground p-4 text-center font-mono uppercase text-xs tracking-wider hover:bg-foreground hover:text-background transition-all duration-300 cursor-pointer"
                  >
                    {cert}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
