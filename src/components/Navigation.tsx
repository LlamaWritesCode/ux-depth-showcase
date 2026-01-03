import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="border-4 border-foreground bg-background px-2 py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1">
            {/* Logo/Name */}
            <a
              href="#"
              className="px-4 py-2 font-serif font-bold text-lg border-r-2 border-foreground mr-2 hover:bg-foreground hover:text-background transition-colors duration-200"
            >
              SS
            </a>
            
            {/* Nav links */}
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 font-mono text-sm uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
