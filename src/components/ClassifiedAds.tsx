import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const classifieds = [
  {
    type: 'TESTIMONIAL',
    content: '"Exceptional work! The design exceeded all expectations and delivered on time."',
    author: '— Sarah Chen, CEO TechStart',
  },
  {
    type: 'FUN FACT',
    content: 'Over 500 cups of coffee consumed during design sessions this year.',
    icon: '☕',
  },
  {
    type: 'TESTIMONIAL',
    content: '"A true professional with an eye for detail. Highly recommended!"',
    author: '— Michael Torres, Director',
  },
  {
    type: 'FUN FACT',
    content: '47 design iterations is the record for a single project. Perfection takes time!',
    icon: '✏️',
  },
  {
    type: 'TESTIMONIAL',
    content: '"Transformed our brand identity completely. Outstanding creative vision."',
    author: '— Emma Wilson, Founder',
  },
  {
    type: 'FUN FACT',
    content: 'Currently reading: 3 design books, 2 biographies, and 1 sci-fi novel.',
    icon: '📚',
  },
];

export const ClassifiedAds = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-background border-t-4 border-b-4 border-foreground relative overflow-hidden">
      {/* Newspaper texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,currentColor_2px,currentColor_3px)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref}>
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <div className="inline-block border-2 border-foreground px-6 py-2 bg-foreground text-background">
              <h2 className="text-2xl md:text-3xl font-serif font-bold uppercase tracking-tight">
                Classified Ads
              </h2>
            </div>
          </motion.div>

          {/* Classified ads grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {classifieds.map((ad, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-2 border-foreground p-4 bg-card hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-200"
              >
                {/* Ad type header */}
                <div className="border-b-2 border-foreground pb-2 mb-3">
                  <span className="text-xs font-mono uppercase tracking-widest font-bold">
                    {ad.type}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  {'icon' in ad ? (
                    <>
                      <div className="text-3xl mb-2">{ad.icon}</div>
                      <p className="font-serif text-sm leading-snug">
                        {ad.content}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="font-serif text-sm leading-snug italic mb-2">
                        {ad.content}
                      </p>
                      <p className="text-xs font-mono uppercase tracking-wider">
                        {ad.author}
                      </p>
                    </>
                  )}
                </div>

                {/* Decorative corner */}
                <div className="mt-3 pt-2 border-t border-foreground/20">
                  <div className="text-xs font-mono text-muted-foreground text-right">
                    AD #{(index + 1).toString().padStart(3, '0')}
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
