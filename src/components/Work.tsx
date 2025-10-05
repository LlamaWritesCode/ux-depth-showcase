import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'UX/UI Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
  },
  {
    title: 'Mobile Banking App',
    category: 'Product Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
  },
  {
    title: 'Healthcare Dashboard',
    category: 'UX Research & Design',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
  },
  {
    title: 'SaaS Platform',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop',
  },
];

export const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="work" className="py-40 relative overflow-hidden">
      <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-red-200/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/3 -left-32 w-[500px] h-[500px] bg-orange-200/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '3s' }} />
      
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
            <div className="w-16 h-0.5 bg-gradient-to-r from-red-300 to-orange-300 mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-3xl">
                  <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-red-50 to-orange-50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="mt-8 text-center">
                    <p className="text-sm font-light text-red-400 mb-2 tracking-wide uppercase">
                      {project.category}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-light text-foreground/90">
                      {project.title}
                    </h3>
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
