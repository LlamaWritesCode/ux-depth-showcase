import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';
import { ScrollHexagons } from './ScrollHexagons';
import { Background3D } from './Background3D';

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
      <Background3D />
      <ScrollHexagons sectionIndex={3} />
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-pink-50" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-red-200/15 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-orange-200/15 rounded-full blur-3xl animate-blob" style={{ animationDelay: '3s' }} />
      
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
            <div className="w-16 h-0.5 bg-gradient-to-r from-red-300 to-orange-300 mx-auto rounded-full mb-12" />
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
            <motion.a
              href="mailto:hello@designer.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-block px-12 py-5 bg-white/30 backdrop-blur-xl border border-white/20 text-foreground rounded-full font-light text-xl transition-all duration-700 hover:bg-white/40 hover:shadow-2xl overflow-hidden"
            >
              <span className="relative z-10">Get in Touch</span>
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8 }}
              />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center gap-4"
          >
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/20 flex items-center justify-center text-muted-foreground/60 hover:bg-white/50 hover:border-white/30 transition-all duration-500 shadow-lg hover:shadow-xl"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
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
