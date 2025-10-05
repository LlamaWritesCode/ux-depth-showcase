import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Twitter, Github, Send } from 'lucide-react';

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
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Let's Create Together
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-8" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? I'd love to hear about it and discuss how we can bring your vision to life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <a
              href="mailto:hello@designer.com"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-white rounded-full font-semibold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-300/50"
            >
              <Send className="w-5 h-5" />
              Drop me a line
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-4 mb-16"
          >
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="group w-16 h-16 rounded-2xl bg-white/70 backdrop-blur-sm border border-purple-100 flex items-center justify-center text-muted-foreground hover:border-purple-300 hover:bg-gradient-to-br hover:from-purple-400 hover:to-pink-400 transition-all duration-300 hover:scale-110 hover:text-white shadow-sm hover:shadow-lg"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-purple-100"
          >
            <p className="text-muted-foreground mb-2">Currently based in</p>
            <p className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              San Francisco, CA
            </p>
            <p className="text-muted-foreground mt-4">
              Available for freelance opportunities
            </p>
          </motion.div>
        </div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-32 pt-8 border-t border-purple-200 text-center text-muted-foreground relative z-10"
      >
        <p>© 2024 Designer Portfolio. Crafted with care and ✨</p>
      </motion.footer>
    </section>
  );
};
