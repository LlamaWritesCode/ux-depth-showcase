import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const socials = [
    { icon: Mail, label: 'Email', href: 'mailto:hello@designer.com' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Github, label: 'GitHub', href: '#' },
  ];

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground">
              Let's Work Together
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it and discuss how we can bring your vision to life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="mailto:hello@designer.com"
              className="inline-block px-12 py-5 bg-primary text-primary-foreground rounded-full font-semibold text-xl transition-all duration-300 hover:scale-105 hover:shadow-xl mb-16"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-6"
          >
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-14 h-14 rounded-full border-2 border-border flex items-center justify-center text-muted-foreground hover:border-accent hover:text-accent transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-32 pt-8 border-t border-border text-center text-muted-foreground"
      >
        <p>© 2024 Designer Portfolio. All rights reserved.</p>
      </motion.footer>
    </section>
  );
};
