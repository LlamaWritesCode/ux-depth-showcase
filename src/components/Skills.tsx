import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Users, Zap, Code } from 'lucide-react';

const skills = [
  {
    icon: Palette,
    title: 'Visual Design',
    description: 'Creating stunning, pixel-perfect interfaces that captivate and engage users.',
  },
  {
    icon: Users,
    title: 'User Research',
    description: 'Deep understanding of user needs through research, testing, and data analysis.',
  },
  {
    icon: Zap,
    title: 'Prototyping',
    description: 'Rapid prototyping and iteration using industry-leading design tools.',
  },
  {
    icon: Code,
    title: 'Design Systems',
    description: 'Building scalable design systems that maintain consistency across products.',
  },
];

const tools = [
  'Figma',
  'Adobe XD',
  'Sketch',
  'Photoshop',
  'Illustrator',
  'Framer',
  'Principle',
  'After Effects',
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for creating exceptional digital experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border hover:border-accent transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <skill.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Tools I Use
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-card border border-border rounded-full text-foreground font-medium hover:border-accent transition-colors duration-300"
                >
                  {tool}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
