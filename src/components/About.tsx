import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { NewspaperDoodles } from './NewspaperDoodles';
import aboutIllustration from '@/assets/about-illustration.png';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-background border-t-4 border-foreground">
      <NewspaperDoodles />
      
      {/* Newspaper texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,currentColor_2px,currentColor_3px)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          ref={ref} 
          className="max-w-4xl mx-auto"
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Newspaper section header */}
          <motion.div
            variants={itemVariants}
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
            variants={itemVariants}
            className="mb-12 -mt-16 relative"
          >
            <motion.img 
              src={aboutIllustration} 
              alt="Designer at work" 
              className="w-full h-auto relative z-0 mix-blend-multiply opacity-80"
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 0.5, 0, -0.5, 0]
              }}
              transition={{ 
                duration: 1.8, 
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
            />
            
            {/* Doodles overlapping the illustration */}
            <motion.svg
              className="absolute top-8 left-12 w-12 h-12 text-foreground opacity-35 z-10"
              viewBox="0 0 40 40"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <path
                d="M20 5 L22 15 L30 12 L24 20 L32 25 L22 23 L20 33 L18 23 L8 25 L16 20 L10 12 L18 15 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>

            <motion.svg
              className="absolute top-4 right-16 w-10 h-10 text-foreground opacity-35 z-10"
              viewBox="0 0 35 35"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path
                d="M17.5 30 C17.5 30 5 20 5 12 C5 7 8 5 11 5 C14 5 17.5 8 17.5 8 C17.5 8 21 5 24 5 C27 5 30 7 30 12 C30 20 17.5 30 17.5 30 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>

            <motion.svg
              className="absolute bottom-8 right-12 w-10 h-10 text-foreground opacity-35 z-10"
              viewBox="0 0 25 25"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <path d="M12.5 5 L12.5 20 M5 12.5 L20 12.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </motion.svg>
          </motion.div>

          {/* Article-style content */}
          <motion.div
            variants={itemVariants}
            className="border-4 border-foreground bg-card p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
          >
            {/* Newspaper columns */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="font-serif text-lg leading-relaxed border-r-2 border-foreground pr-8">
                <p className="mb-6 first-letter:text-7xl first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:leading-none">
                  I'm a UX Designer pursuing my Master's in Information Systems at UMBC, specializing in Data Science, HCI & UX Design. I create scalable, accessible experiences through research and collaboration.
                </p>
                <p className="mb-6">
                  My approach combines user-centered design thinking with data-driven insights, ensuring every decision is backed by research and real user feedback.
                </p>
              </div>
              <div className="font-serif text-lg leading-relaxed">
                <p className="mb-6">
                  At Sparksoft Corp and Optum, I designed end-to-end user experiences, conducted usability testing, and improved task success rates by 25% while meeting WCAG 2.1 accessibility standards.
                </p>
                <p>
                  I'm certified in Google UX Design, Google Project Management, and IBM Scrum Master—bringing a holistic understanding of design and delivery.
                </p>
              </div>
            </div>

            {/* Stats in newspaper style */}
            <div className="border-t-2 border-foreground pt-8 mt-8">
              <div className="grid grid-cols-3 gap-6 text-center">
                {[
                  { label: 'Years Experience', value: '3+' },
                  { label: 'Products Designed', value: '4+' },
                  { label: 'GPA', value: '3.8' },
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
        </motion.div>
      </div>
    </section>
  );
};
