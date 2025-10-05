import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ScrollHexagons } from './ScrollHexagons';
import { ArrowUpRight } from 'lucide-react';
import { Background3D } from './Background3D';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'UX/UI Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    span: 'col-span-2',
  },
  {
    title: 'Mobile Banking App',
    category: 'Product Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    span: 'col-span-1',
  },
  {
    title: 'Healthcare Dashboard',
    category: 'UX Research & Design',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
    span: 'col-span-1',
  },
  {
    title: 'SaaS Platform',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop',
    span: 'col-span-2',
  },
];

export const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="work" className="py-40 relative overflow-hidden">
      <Background3D />
      <ScrollHexagons sectionIndex={1} />
      {/* Rich background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100/40 via-orange-100/40 to-red-100/40" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-6xl font-light mb-8 text-foreground/90">
              Selected Work
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-red-400 to-orange-400 mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative ${project.span}`}
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-red-400/60 to-orange-400/60 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-1000" />
                
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative overflow-hidden rounded-3xl h-full shadow-2xl"
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(30px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 8px 32px 0 rgba(252, 165, 165, 0.15)',
                  }}
                >
                  {/* Image container */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                    />
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Floating glass button */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      whileHover={{ scale: 1.1 }}
                      className="absolute top-6 right-6 w-14 h-14 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                      style={{
                        background: 'rgba(255, 255, 255, 0.25)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      <ArrowUpRight className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                  
                  {/* Content with glass effect */}
                  <div 
                    className="p-8"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                    }}
                  >
                    <p className="text-xs font-medium text-red-500 mb-3 tracking-wider uppercase">
                      {project.category}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-light text-foreground/90 group-hover:text-red-600 transition-colors duration-500">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
