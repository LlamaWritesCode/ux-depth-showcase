import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { NewspaperDoodles } from './NewspaperDoodles';

const projects = [
  {
    title: 'CMS Framework Design',
    category: 'UX/UI Design',
    description: 'Designed end-to-end user experiences for a CMS framework, translating research into scalable UI components adopted across 10+ internal products.',
    year: '2022-2024',
    company: 'Sparksoft Corp',
  },
  {
    title: 'SoundCloud Redesign',
    category: 'UX Redesign',
    description: 'Redesigned the SoundCloud website and logo, improving navigation, user flows, and visual consistency across 5+ screens with accessibility best practices.',
    year: '2025',
    company: 'Personal Project',
  },
  {
    title: 'AI Remix My Design',
    category: 'Product Design',
    description: 'Designed an AI tool with Figma and Adobe Express APIs, enabling rapid UI mockup transformations into multiple themes, cutting redesign effort by 50%.',
    year: '2025',
    company: 'Personal Project',
  },
  {
    title: 'Healthcare UX',
    category: 'UX Research & Design',
    description: 'Conducted user-centered analysis to translate business goals into end-to-end workflows and traceability matrices, supporting 5+ core product features.',
    year: '2022',
    company: 'Optum',
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
                  {project.company}
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
                    {project.year}
                  </span>
                  {/* <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span> */}
                  {project.title === 'SoundCloud Redesign' && (
                    <a 
                      href="https://www.behance.net/gallery/241400707/SoundCloud-Redesign"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-foreground px-4 py-1 text-sm font-mono uppercase tracking-wider bg-foreground text-background hover:bg-background hover:text-foreground transition-all duration-200"
                    >
                      View
                    </a>
                  )}
                  {project.title === 'AI Remix My Design' && (
                    <a 
                      href="https://devpost.com/software/ai-remix-my-design"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-foreground px-4 py-1 text-sm font-mono uppercase tracking-wider bg-foreground text-background hover:bg-background hover:text-foreground transition-all duration-200"
                    >
                      View
                    </a>
                  )}
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
            <a
              href="https://www.behance.net/somyasingh53"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-4 border-foreground px-10 py-3 font-serif font-bold text-lg uppercase bg-background hover:bg-foreground hover:text-background transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1"
            >
              View All Projects
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
