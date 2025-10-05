import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { NewspaperDoodles } from './NewspaperDoodles';
import aboutIllustration from '@/assets/about-illustration.jpg';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-background border-t-4 border-foreground">
      <NewspaperDoodles />
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Newspaper section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="inline-block border-4 border-foreground px-8 py-3 bg-foreground text-background shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300">
              <h2 className="text-5xl md:text-6xl font-serif font-bold tracking-tight">
                About the Designer
              </h2>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12 -mt-16 relative"
          >
            <img 
              src={aboutIllustration} 
              alt="Designer at work" 
              className="w-full h-auto relative z-0"
            />
            
            {/* Doodles overlapping the illustration */}
            <motion.svg
              className="absolute top-8 left-12 w-20 h-20 text-foreground opacity-30 z-10"
              viewBox="0 0 40 40"
              animate={{ rotate: 360 }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            >
              <path
                d="M20 5 L22 15 L30 12 L24 20 L32 25 L22 23 L20 33 L18 23 L8 25 L16 20 L10 12 L18 15 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </motion.svg>

            <motion.svg
              className="absolute top-4 right-16 w-16 h-16 text-foreground opacity-30 z-10"
              viewBox="0 0 35 35"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <path
                d="M17.5 30 C17.5 30 5 20 5 12 C5 7 8 5 11 5 C14 5 17.5 8 17.5 8 C17.5 8 21 5 24 5 C27 5 30 7 30 12 C30 20 17.5 30 17.5 30 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </motion.svg>

            <motion.svg
              className="absolute bottom-12 left-20 w-18 h-18 text-foreground opacity-30 z-10"
              viewBox="0 0 50 50"
              animate={{ rotate: -360 }}
              transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
            >
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            </motion.svg>

            <motion.svg
              className="absolute bottom-8 right-12 w-14 h-14 text-foreground opacity-30 z-10"
              viewBox="0 0 25 25"
              animate={{ rotate: 360 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              <path d="M12.5 5 L12.5 20 M5 12.5 L20 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </motion.svg>
          </motion.div>

          {/* Article-style content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-4 border-foreground bg-card p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
          >
            {/* Newspaper columns */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="font-serif text-lg leading-relaxed border-r-2 border-foreground pr-8">
                <p className="mb-6 first-letter:text-7xl first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:leading-none">
                  I'm a UX/UI and Product Designer with a passion for creating exceptional digital experiences that make a real difference in people's lives.
                </p>
                <p className="mb-6">
                  My approach combines user-centered design thinking with a deep understanding of modern technology and human psychology.
                </p>
              </div>
              <div className="font-serif text-lg leading-relaxed">
                <p className="mb-6">
                  I believe great design is invisible—it simply works. Every project is an opportunity to solve real problems through creative, thoughtful solutions.
                </p>
                <p>
                  With over 5 years of experience, I've helped dozens of clients bring their visions to life through beautiful, functional design.
                </p>
              </div>
            </div>

            {/* Stats in newspaper style */}
            <div className="border-t-2 border-foreground pt-8 mt-8">
              <div className="grid grid-cols-3 gap-6 text-center">
                {[
                  { label: 'Years Experience', value: '5+' },
                  { label: 'Projects Completed', value: '50+' },
                  { label: 'Happy Clients', value: '30+' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="border-2 border-foreground p-6 bg-background hover:bg-foreground hover:text-background transition-all duration-300"
                  >
                    <div className="text-5xl font-serif font-bold mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm uppercase tracking-widest font-mono">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
