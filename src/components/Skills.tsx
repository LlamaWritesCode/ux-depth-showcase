import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Users, Zap, Code } from 'lucide-react';

const skills = [
  {
    icon: Palette,
    title: 'Visual Design',
    description: 'Creating stunning, pixel-perfect interfaces that captivate users.',
    gradient: 'from-purple-400 to-pink-400',
  },
  {
    icon: Users,
    title: 'User Research',
    description: 'Deep understanding through research, testing, and data analysis.',
    gradient: 'from-pink-400 to-blue-400',
  },
  {
    icon: Zap,
    title: 'Prototyping',
    description: 'Rapid prototyping and iteration using industry-leading tools.',
    gradient: 'from-blue-400 to-purple-400',
  },
  {
    icon: Code,
    title: 'Design Systems',
    description: 'Building scalable systems that maintain consistency.',
    gradient: 'from-purple-400 to-blue-400',
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
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/30 via-purple-50/30 to-blue-50/30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for creating exceptional experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-20 rounded-3xl blur-xl group-hover:opacity-30 transition-opacity duration-500`} />
                
                <div className="relative bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-purple-100/50">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                    <skill.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Tools I Love
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  className="px-6 py-3 bg-white/70 backdrop-blur-sm border border-purple-100 rounded-full text-foreground font-medium hover:border-purple-300 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
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
