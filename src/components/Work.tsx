import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'UX/UI Design',
    description: 'A modern, conversion-optimized shopping experience for a luxury fashion brand.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    color: 'from-purple-100 to-pink-100',
  },
  {
    title: 'Mobile Banking App',
    category: 'Product Design',
    description: 'Reimagining personal finance management with an intuitive, secure mobile experience.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    color: 'from-blue-100 to-purple-100',
  },
  {
    title: 'Healthcare Dashboard',
    category: 'UX Research & Design',
    description: 'Streamlining patient data visualization for healthcare professionals.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
    color: 'from-pink-100 to-blue-100',
  },
  {
    title: 'SaaS Platform',
    category: 'UI/UX Design',
    description: 'A comprehensive project management tool designed for distributed teams.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop',
    color: 'from-purple-100 to-blue-100',
  },
];

export const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="work" className="py-32 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Featured Work
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my design philosophy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-3xl opacity-50 blur-xl group-hover:opacity-70 transition-opacity duration-500`} />
                
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-purple-100 hover:border-purple-200 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl shadow-purple-100/50">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-purple-500 mb-2">
                          {project.category}
                        </p>
                        <h3 className="text-2xl font-bold text-foreground mb-3">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      <div className="ml-4 w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
