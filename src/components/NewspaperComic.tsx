import { motion } from 'framer-motion';

export const NewspaperComic = () => {
  return (
    <motion.div 
      className="w-full max-w-4xl mx-auto bg-background border-4 border-foreground p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Comic Title Header */}
      <div className="border-b-4 border-foreground pb-3 mb-6">
        <h2 className="text-4xl font-black text-center tracking-tight">THE DESIGN CHRONICLES</h2>
        <p className="text-center text-sm mt-1 font-bold">A Daily Comic Strip</p>
      </div>

      {/* Three Panel Comic Strip */}
      <div className="grid grid-cols-3 gap-4">
        {/* Panel 1 */}
        <div className="border-4 border-foreground bg-background p-4 aspect-square flex flex-col">
          <svg viewBox="0 0 200 200" className="flex-1">
            {/* Character looking at computer */}
            <rect x="20" y="120" width="160" height="60" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="3" />
            <rect x="60" y="100" width="80" height="20" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="3" />
            
            {/* Character head */}
            <circle cx="100" cy="70" r="30" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="3" />
            <rect x="80" y="95" width="40" height="30" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="3" />
            
            {/* Eyes */}
            <circle cx="88" cy="65" r="5" fill="currentColor" />
            <circle cx="112" cy="65" r="5" fill="currentColor" />
            
            {/* Neutral mouth */}
            <line x1="88" y1="82" x2="112" y2="82" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            
            {/* Speech bubble */}
            <ellipse cx="140" cy="40" rx="45" ry="25" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="2.5" />
            <path d="M108 50 L105 60 L115 55" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="2.5" />
            <text x="110" y="37" fontSize="10" fontWeight="bold" fill="currentColor">I NEED</text>
            <text x="108" y="48" fontSize="10" fontWeight="bold" fill="currentColor">A DESIGN</text>
          </svg>
        </div>

        {/* Panel 2 */}
        <div className="border-4 border-foreground bg-background p-4 aspect-square flex flex-col">
          <svg viewBox="0 0 200 200" className="flex-1">
            {/* Same character, excited */}
            <rect x="20" y="120" width="160" height="60" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="3" />
            <rect x="60" y="100" width="80" height="20" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="3" />
            
            <circle cx="100" cy="70" r="30" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="3" />
            <rect x="80" y="95" width="40" height="30" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="3" />
            
            {/* Wide eyes */}
            <circle cx="88" cy="65" r="6" fill="currentColor" />
            <circle cx="112" cy="65" r="6" fill="currentColor" />
            <circle cx="89" cy="64" r="2" fill="white" />
            <circle cx="113" cy="64" r="2" fill="white" />
            
            {/* Big smile */}
            <path d="M85 80 Q100 90 115 80" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
            
            {/* Lightbulb above head */}
            <circle cx="100" cy="20" r="12" fill="yellow" opacity="0.3" stroke="currentColor" strokeWidth="3" />
            <rect x="96" y="32" width="8" height="6" stroke="currentColor" strokeWidth="2" fill="none" />
            <line x1="85" y1="18" x2="75" y2="15" stroke="currentColor" strokeWidth="2" />
            <line x1="115" y1="18" x2="125" y2="15" stroke="currentColor" strokeWidth="2" />
            <line x1="100" y1="8" x2="100" y2="0" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        {/* Panel 3 */}
        <div className="border-4 border-foreground bg-background p-4 aspect-square flex flex-col">
          <svg viewBox="0 0 200 200" className="flex-1">
            {/* Character typing frantically */}
            <rect x="20" y="120" width="160" height="60" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="3" />
            <rect x="60" y="100" width="80" height="20" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="3" />
            
            <circle cx="100" cy="70" r="30" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="3" />
            <rect x="80" y="95" width="40" height="30" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="3" />
            
            {/* Focused eyes */}
            <circle cx="88" cy="65" r="4" fill="currentColor" />
            <circle cx="112" cy="65" r="4" fill="currentColor" />
            
            {/* Concentrated mouth */}
            <path d="M90 80 Q100 78 110 80" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
            
            {/* Action lines */}
            <line x1="140" y1="100" x2="160" y2="95" stroke="currentColor" strokeWidth="2" />
            <line x1="140" y1="110" x2="165" y2="110" stroke="currentColor" strokeWidth="2" />
            <line x1="140" y1="120" x2="160" y2="125" stroke="currentColor" strokeWidth="2" />
            
            {/* Text */}
            <text x="70" y="180" fontSize="14" fontWeight="bold" fill="currentColor">CLICK</text>
            <text x="110" y="180" fontSize="14" fontWeight="bold" fill="currentColor">CLICK</text>
          </svg>
        </div>
      </div>

      {/* Caption */}
      <div className="mt-4 text-center border-t-2 border-foreground pt-3">
        <p className="text-sm font-bold italic">Every designer's journey in three panels</p>
      </div>
    </motion.div>
  );
};
