import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUp, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
      if (window.scrollY <= 300) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Compact Menu Button */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-4 left-4 z-50"
          >
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="border-4 border-foreground bg-background p-3 shadow-[4px_4px_0px_0px] shadow-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 border-4 border-foreground bg-background shadow-[6px_6px_0px_0px] shadow-foreground"
                >
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="block px-6 py-3 font-mono text-sm uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors duration-200 border-b-2 border-foreground last:border-b-0"
                    >
                      {link.label}
                    </a>
                  ))}
                  
                  {/* Dark Mode Toggle */}
                  <button
                    onClick={toggleTheme}
                    className="w-full flex items-center gap-3 px-6 py-3 font-mono text-sm uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors duration-200 border-t-2 border-foreground"
                  >
                    {mounted && (theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
                    <span>{mounted && (theme === 'dark' ? 'Light Mode' : 'Dark Mode')}</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Scroll to Top Button */}
          <motion.button
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 border-4 border-foreground bg-background p-3 shadow-[4px_4px_0px_0px] shadow-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </>
      )}
    </AnimatePresence>
  );
};
