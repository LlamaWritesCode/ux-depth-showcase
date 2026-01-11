import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Greeting */}
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              About the Designer 👋
            </h2>
            
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

            {/* CTA Button */}
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1e1b4b] text-white font-semibold text-base rounded-full hover:bg-[#2d2a5e] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send me a message
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
