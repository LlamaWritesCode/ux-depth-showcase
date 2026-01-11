import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Search, Boxes, Users, Lightbulb, HeartHandshake } from 'lucide-react';

const skills = [
  {
    title: 'UX Design',
    description: 'From wireframes to user journeys I utilize various UX techniques to deliver world-class experience.',
    icon: Palette,
  },
  {
    title: 'UI Design',
    description: 'To make outstanding UX work, it still needs polished visual design and attention to detail.',
    icon: Boxes,
  },
  {
    title: 'UX Research',
    description: 'I create surveys, hold user interviews, and analyze data to find what works and what doesn\'t.',
    icon: Search,
  },
  {
    title: 'Prototyping',
    description: 'I build prototypes to quickly gather feedback and validate ideas before development.',
    icon: Lightbulb,
  },
  {
    title: 'Workshops',
    description: 'I conduct workshops to generate ideas and promote cross-functional collaboration.',
    icon: Users,
  },
  {
    title: 'Collaboration',
    description: 'I bring positive energy to teams and communicate effectively about design decisions.',
    icon: HeartHandshake,
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto px-6">
        <div ref={ref}>
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-3">
              Ways of working 💡
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Skills that I use to create<br />world-class products
            </h2>
          </motion.div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-background rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mb-6">
                  <skill.icon className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="font-bold text-xl mb-3">{skill.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
