import { motion } from 'framer-motion';
import { NewspaperDoodles } from './NewspaperDoodles';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <NewspaperDoodles />
      
      {/* Newspaper texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,currentColor_2px,currentColor_3px)]" />
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-5xl mx-auto">
          {/* Newspaper masthead style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12"
          >
            {/* Date and edition */}
            <div className="text-xs tracking-widest uppercase mb-4 text-muted-foreground font-mono">
              Portfolio Edition • {new Date().getFullYear()}
            </div>
            
            {/* Main headline */}
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tight mb-6 relative">
              <span className="block mb-2">Somya Singh</span>
              <span className="block text-5xl md:text-6xl font-light italic">UX Designer</span>
              
              {/* Decorative underlines */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-foreground" />
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-foreground" />
            </h1>
          </motion.div>

          {/* Subheading in newspaper column style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-2xl mx-auto"
          >
            <div className="border-t-4 border-b-4 border-foreground py-6 mb-12">
              <p className="text-xl md:text-2xl text-center font-serif leading-relaxed">
                Crafting user-centered experiences through research-driven design, accessibility, and cross-functional collaboration
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons - newspaper style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-center flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#about"
              className="inline-block px-12 py-4 border-4 border-foreground bg-foreground text-background font-serif font-bold text-lg tracking-wide uppercase hover:bg-background hover:text-foreground transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Portfolio →
            </motion.a>
          </motion.div>

          {/* Decorative newspaper elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-20 grid grid-cols-3 gap-4 text-center text-xs uppercase tracking-wider font-mono border-t border-b border-foreground py-4"
          >
            <div className="border-r border-foreground">
              <div className="font-bold">Master's in Information Systems</div>
              <div className="text-muted-foreground">University of Maryland</div>
            </div>
            <div className="border-r border-foreground">
              <div className="font-bold">Specialization in Data Science, HCI & UX Design</div>
              <div className="text-muted-foreground">Focus Areas</div>
            </div>
            <div>
              <div className="font-bold">Google & IBM</div>
              <div className="text-muted-foreground">Certified</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
