import { motion } from "framer-motion";

const newsItems = [
  "NEW PROJECT LAUNCHED: Modern E-commerce Platform Goes Live",
  "AWARD WINNING: Design Excellence Recognition 2024",
  "BREAKING: Revolutionary UI/UX Improvements Deployed",
  "JUST IN: Client Satisfaction Reaches All-Time High",
  "EXCLUSIVE: Innovative Solutions Streamline Business Operations",
  "DEVELOPING: Next-Generation Web Applications in Progress",
];

export const BreakingNewsTicker = () => {
  const tickerContent = [...newsItems, ...newsItems, ...newsItems].join(" • ");
  
  return (
    <div className="relative w-full overflow-hidden border-y-2 border-[hsl(var(--newspaper-border))] bg-[hsl(var(--accent))] py-2">
      <div className="flex items-center">
        <div className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-4 py-1 font-bold uppercase text-sm whitespace-nowrap z-10 border-r-2 border-[hsl(var(--newspaper-border))]">
          Breaking News
        </div>
        <div className="flex-1 overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: [0, -2000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            <span className="text-sm font-bold px-4 text-[hsl(var(--accent-foreground))]">
              {tickerContent}
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
