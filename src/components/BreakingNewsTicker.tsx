import { motion } from 'framer-motion';

const newsItems = [
  "🚀 NEW PROJECT LAUNCHED: Portfolio redesign complete",
  "💼 AVAILABLE FOR FREELANCE: Open to exciting opportunities",
  "🎨 LATEST WORK: Check out the new design showcase below",
  "⭐ FEATURED: Recent project gained industry recognition",
  "📱 NOW MOBILE OPTIMIZED: All projects responsive across devices",
  "🔥 TRENDING: Innovative solutions in web development",
];

export const BreakingNewsTicker = () => {
  return (
    <div className="bg-destructive text-destructive-foreground py-2 overflow-hidden border-y-2 border-border relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-destructive to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-destructive to-transparent z-10" />
      
      <div className="flex items-center gap-2 px-4">
        <span className="font-bold text-sm whitespace-nowrap bg-background text-foreground px-3 py-1 border-2 border-border">
          BREAKING NEWS
        </span>
        
        <div className="flex-1 overflow-hidden">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...newsItems, ...newsItems].map((item, index) => (
              <span key={index} className="text-sm font-semibold">
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};