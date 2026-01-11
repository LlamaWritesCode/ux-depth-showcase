import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Figma, PenTool, Layout, TestTube, MessageSquare, Layers } from 'lucide-react';

const tools = [
  {
    name: 'Figma',
    description: 'UX/UI Design & Prototyping',
    icon: Figma,
  },
  {
    name: 'Sketch',
    description: 'Interface Design',
    icon: PenTool,
  },
  {
    name: 'Adobe Suite',
    description: 'Creative Design',
    icon: Layers,
  },
  {
    name: 'InVision',
    description: 'Prototyping & Collaboration',
    icon: Layout,
  },
  {
    name: 'JIRA',
    description: 'Project Management',
    icon: MessageSquare,
  },
  {
    name: 'Maze',
    description: 'Usability Testing',
    icon: TestTube,
  },
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
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-3">
              My favorite tools 🛠️
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              These are the tools<br />I use everyday
            </h2>
          </motion.div>

          {/* Tool cards grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-muted rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <tool.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-1">{tool.name}</h3>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
