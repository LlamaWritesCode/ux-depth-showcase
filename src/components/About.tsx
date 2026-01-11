import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import aboutImage from '@/assets/about-illustration.png';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Section header */}
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
              About the Designer
            </h2>

            {/* Two column layout */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-3xl overflow-hidden bg-accent"
              >
                <img
                  src={aboutImage}
                  alt="Designer at work"
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Content */}
              <div>
                {/* Bio paragraphs */}
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
                  <p>
                    I'm a UX Designer pursuing my Master's in Information Systems at UMBC, specializing in Data Science, HCI & UX Design. I create scalable, accessible experiences through research and collaboration.
                  </p>
                  <p>
                    My approach combines user-centered design thinking with data-driven insights, ensuring every decision is backed by research and real user feedback.
                  </p>
                  <p>
                    At Sparksoft Corp and Optum, I designed end-to-end user experiences, conducted usability testing, and improved task success rates by 25% while meeting WCAG 2.1 accessibility standards.
                  </p>
                  <p>
                    I'm certified in Google UX Design, Google Project Management, and IBM Scrum Master—bringing a holistic understanding of design and delivery.
                  </p>
                </div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="grid grid-cols-3 gap-4"
                >
                  <div className="text-center p-4 bg-muted rounded-2xl">
                    <p className="text-3xl font-bold">3+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-2xl">
                    <p className="text-3xl font-bold">4+</p>
                    <p className="text-sm text-muted-foreground">Products Designed</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-2xl">
                    <p className="text-3xl font-bold">3.8</p>
                    <p className="text-sm text-muted-foreground">GPA</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
