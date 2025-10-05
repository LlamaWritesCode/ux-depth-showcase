import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'UX/UI Design',
    description: 'A modern, conversion-optimized shopping experience for a luxury fashion brand.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
  },
  {
    title: 'Mobile Banking App',
    category: 'Product Design',
    description: 'Reimagining personal finance management with an intuitive, secure mobile experience.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
  },
  {
    title: 'Healthcare Dashboard',
    category: 'UX Research & Design',
    description: 'Streamlining patient data visualization for healthcare professionals.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
  },
  {
    title: 'SaaS Platform',
    category: 'UI/UX Design',
    description: 'A comprehensive project management tool designed for distributed teams.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop',
  },
];

export const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="work" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Featured Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my design philosophy and capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-card cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-sm text-accent font-medium mb-2">
                          {project.category}
                        </p>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {project.description}
                        </p>
                      </div>
                      <ExternalLink className="w-6 h-6 text-white flex-shrink-0 ml-4" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-accent font-medium mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
