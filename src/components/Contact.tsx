import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { NewspaperDoodles } from './NewspaperDoodles';

// Behance icon component
const Behance = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
  </svg>
);

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const socials = [
    { icon: Mail, label: 'Email', href: 'mailto:ssingh12@umbc.edu' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/somya-s-9948ba19b/' },
    { icon: Behance, label: 'Behance', href: 'https://www.behance.net/somyasingh53' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/LlamaWritesCode' },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-background border-t-4 border-foreground">
      <NewspaperDoodles />
      
      {/* Newspaper texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,currentColor_2px,currentColor_3px)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="inline-block border-4 border-foreground px-8 py-3 bg-foreground text-background mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300">
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
                href="mailto:ssingh12@umbc.edu"
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
          © {new Date().getFullYear()} Somya Singh • All Rights Reserved
        </p>
      </motion.footer>
    </section>
  );
};
