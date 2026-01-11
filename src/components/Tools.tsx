import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Core skills data
const coreSkills = [
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

// Tools data
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

// Certifications data
const certifications = [
  'Google UX Design',
  'Google Project Management',
  'IBM IT Scrum Master',
  'IBM Python for Data Science',
];

export const Tools = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="tools" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div ref={ref}>
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Expertise & Tools
            </h2>
          </motion.div>

          {/* Core Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <h3 className="text-xl font-bold mb-6">Core Skills</h3>
            <div className="flex flex-wrap gap-3">
              {coreSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.15 + index * 0.03 }}
                  className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Tools of the Trade */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <h3 className="text-xl font-bold mb-6">Tools of the Trade</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.25 + index * 0.03 }}
                  className="px-4 py-2 bg-accent rounded-full text-sm font-medium text-foreground"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6">Certifications</h3>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.35 + index * 0.03 }}
                  className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-foreground"
                >
                  {cert}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
