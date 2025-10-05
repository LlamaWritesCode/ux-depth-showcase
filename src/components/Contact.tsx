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
    <section id="contact" className="py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-200/15 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-pink-200/15 rounded-full blur-3xl animate-blob" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 text-foreground/90">
              Let's Connect
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 mx-auto rounded-full mb-12" />
            <p className="text-xl text-muted-foreground/70 max-w-xl mx-auto leading-relaxed font-light">
              I'd love to hear about your project
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <a
              href="mailto:hello@designer.com"
              className="inline-block px-12 py-5 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full font-light text-xl transition-all duration-700 hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-300/30"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center gap-6"
          >
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-14 h-14 rounded-full bg-white/40 backdrop-blur-sm border border-purple-100/50 flex items-center justify-center text-muted-foreground/60 hover:bg-white/60 hover:border-purple-200 transition-all duration-500 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.9 }}
        className="mt-32 pt-8 text-center text-muted-foreground/50 text-sm font-light relative z-10"
      >
        <p>© 2024 Designer Portfolio</p>
      </motion.footer>
    </section>
  );
};
