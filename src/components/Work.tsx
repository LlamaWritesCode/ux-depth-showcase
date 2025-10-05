import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { NewspaperDoodles } from './NewspaperDoodles';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'UX/UI Design',
    description: 'Complete redesign of shopping experience',
    year: '2024',
  },
  {
    title: 'Mobile Banking App',
    category: 'Product Design',
    description: 'Secure and intuitive financial management',
    year: '2023',
  },
  {
    title: 'Healthcare Dashboard',
    category: 'UX Research & Design',
    description: 'Patient data visualization and analytics',
    year: '2023',
  },
  {
    title: 'SaaS Platform',
    category: 'UI/UX Design',
    description: 'Enterprise collaboration tool',
    year: '2024',
  },
];

export const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="work" className="py-32 relative overflow-hidden bg-background border-t-4 border-foreground">
      <NewspaperDoodles />
      
      {/* Newspaper texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,currentColor_2px,currentColor_3px)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref}>
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="inline-block border-4 border-foreground px-8 py-3 bg-foreground text-background shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300">
              <h2 className="text-5xl md:text-6xl font-serif font-bold tracking-tight">
                Featured Work
              </h2>
            </div>
            <div className="mt-6 text-sm uppercase tracking-widest font-mono text-muted-foreground">
              Selected Projects & Case Studies
            </div>
          </motion.div>

          {/* Project listings - newspaper classified style */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-4 border-foreground bg-card p-8 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                {/* Project number */}
                <div className="text-xs font-mono tracking-wider mb-4 text-muted-foreground">
                  PROJECT #{(index + 1).toString().padStart(2, '0')}
                </div>
                
                {/* Title */}
                <h3 className="text-3xl font-serif font-bold mb-3 group-hover:underline decoration-4 decoration-foreground underline-offset-4">
                  {project.title}
                </h3>
                
                {/* Category badge */}
                <div className="inline-block border-2 border-foreground px-4 py-1 text-xs font-mono uppercase tracking-wider mb-4 bg-foreground text-background">
                  {project.category}
                </div>
                
                {/* Description */}
                <p className="font-serif text-lg leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Footer with year */}
                <div className="border-t-2 border-foreground pt-4 flex justify-between items-center">
                  <span className="text-sm font-mono uppercase tracking-wider">
                    Year: {project.year}
                  </span>
                  <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View more button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <button className="border-4 border-foreground px-10 py-3 font-serif font-bold text-lg uppercase bg-background hover:bg-foreground hover:text-background transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1">
              View All Projects
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
