import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'CMS Framework Design',
    category: 'UX/UI DESIGN',
    description: 'Designed end-to-end user experiences for a CMS framework, translating research into scalable UI components adopted across 10+ internal products.',
    company: 'Sparksoft Corp',
    color: 'bg-accent-pink',
  },
  {
    title: 'SoundCloud Redesign',
    category: 'UX REDESIGN',
    description: 'Redesigned the SoundCloud website and logo, improving navigation, user flows, and visual consistency across 5+ screens with accessibility best practices.',
    company: 'Personal Project',
    link: 'https://www.behance.net/gallery/241400707/SoundCloud-Redesign',
    color: 'bg-accent',
  },
  {
    title: 'AI Remix My Design',
    category: 'PRODUCT DESIGN',
    description: 'Designed an AI tool with Figma and Adobe Express APIs, enabling rapid UI mockup transformations into multiple themes, cutting redesign effort by 50%.',
    company: 'Personal Project',
    link: 'https://devpost.com/software/ai-remix-my-design',
    color: 'bg-secondary',
  },
  {
    title: 'Healthcare UX',
    category: 'UX RESEARCH & DESIGN',
    description: 'Conducted user-centered analysis to translate business goals into end-to-end workflows and traceability matrices, supporting 5+ core product features.',
    company: 'Optum',
    color: 'bg-muted',
  },
];

export const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="work" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div ref={ref}>
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-3">
              Featured Work ✨
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Projects I've worked on
            </h2>
          </motion.div>

          {/* Project cards */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${project.color} rounded-3xl p-8 md:p-12 group cursor-pointer hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    {/* Category */}
                    <p className="text-xs font-semibold tracking-widest text-muted-foreground mb-4">
                      {project.category}
                    </p>
                    
                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                      {project.description}
                    </p>
                    
                    {/* Company tag */}
                    <p className="mt-6 text-sm font-medium text-muted-foreground">
                      {project.company}
                    </p>
                  </div>
                  
                  {/* Action buttons */}
                  {project.link && (
                    <div className="flex gap-3">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-full hover:opacity-90 transition-opacity"
                      >
                        Case study
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
