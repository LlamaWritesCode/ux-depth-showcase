import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, ArrowUpRight, FileText } from 'lucide-react';

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
    <section id="contact" className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground">
              Have a project in mind? Let's create something amazing together.
            </p>
          </motion.div>

          {/* Main CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <motion.a
              href="mailto:ssingh12@umbc.edu"
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-semibold text-lg rounded-full hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch →
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.label !== 'Email' ? '_blank' : undefined}
                rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex flex-col items-center gap-3 p-6 bg-background rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <social.icon className="w-7 h-7" />
                <span className="text-sm font-medium">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Resume section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-background rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold mb-2">View Resume</h3>
            <p className="text-muted-foreground mb-4">
              Download my resume to learn more about my experience and skills.
            </p>
            <a
              href="/Somya_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-foreground hover:bg-muted transition-colors font-medium"
            >
              <FileText className="w-4 h-4" />
              Download Resume
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-20 text-center"
      >
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Somya Singh • All Rights Reserved
        </p>
      </motion.footer>
    </section>
  );
};
