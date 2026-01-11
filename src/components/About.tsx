import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Briefcase } from 'lucide-react';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { label: 'Years Experience', value: '3+', icon: Briefcase },
    { label: 'Products Designed', value: '4+', icon: Award },
    { label: 'GPA', value: '3.8', icon: GraduationCap },
  ];

  const certifications = [
    'Google UX Design',
    'Google Project Management',
    'IBM IT Scrum Master',
    'IBM Python for Data Science',
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-3xl mx-auto text-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-3">
              A little bit about myself 👋
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              About me
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-10">
              <p>
                I'm a UX Designer pursuing my Master's in Information Systems at UMBC, specializing in Data Science, HCI & UX Design. I create scalable, accessible experiences through research and collaboration.
              </p>
              <p>
                At Sparksoft Corp and Optum, I designed end-to-end user experiences, conducted usability testing, and improved task success rates by 25% while meeting WCAG 2.1 accessibility standards.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="bg-muted rounded-2xl p-6 text-center"
                >
                  <div className="text-4xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap justify-center gap-2">
              {certifications.map((cert, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  className="px-4 py-2 bg-accent rounded-full text-sm font-medium"
                >
                  {cert}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
