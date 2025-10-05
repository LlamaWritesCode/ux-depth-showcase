import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';
import { NewspaperDoodles } from './NewspaperDoodles';

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
    <section id="contact" className="py-32 relative overflow-hidden bg-background border-t-4 border-foreground">
      <NewspaperDoodles />
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="inline-block border-4 border-foreground px-8 py-3 bg-foreground text-background mb-8 shadow-lg">
              <h2 className="text-5xl md:text-6xl font-serif font-bold tracking-tight">
                Let's Connect
              </h2>
            </div>
            <p className="text-xl md:text-2xl font-serif">
              Have a project in mind? Let's create something amazing together.
            </p>
          </motion.div>

          {/* Contact card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-4 border-foreground bg-card p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] mb-12"
          >
            {/* Email CTA */}
            <div className="text-center mb-12">
              <motion.a
                href="mailto:hello@designer.com"
                className="inline-block border-4 border-foreground px-12 py-4 font-serif font-bold text-2xl bg-foreground text-background hover:bg-background hover:text-foreground transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch →
              </motion.a>
            </div>

            {/* Divider */}
            <div className="border-t-2 border-foreground my-8" />

            {/* Social links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="border-2 border-foreground p-6 flex flex-col items-center justify-center gap-3 hover:bg-foreground hover:text-background transition-all duration-300 group"
                  whileHover={{ y: -4 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-8 h-8" />
                  <span className="font-mono text-sm uppercase tracking-wider">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter signup - newspaper style */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-4 border-foreground bg-foreground text-background p-8"
          >
            <div className="text-center">
              <h3 className="text-2xl font-serif font-bold mb-4">
                Subscribe to Updates
              </h3>
              <p className="font-serif mb-6">
                Get the latest design insights and project updates delivered to your inbox.
              </p>
              <div className="flex gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="flex-1 border-2 border-background px-4 py-2 font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-background"
                />
                <button className="border-2 border-background bg-background text-foreground px-6 py-2 font-serif font-bold hover:bg-transparent hover:text-background transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-20 pt-8 border-t-2 border-foreground text-center relative z-10"
      >
        <p className="font-mono text-sm uppercase tracking-widest">
          © {new Date().getFullYear()} Designer Portfolio • All Rights Reserved
        </p>
      </motion.footer>
    </section>
  );
};
