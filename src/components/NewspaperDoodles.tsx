import { motion } from 'framer-motion';

export const NewspaperDoodles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      {/* Hand-drawn doodle elements scattered across the background */}
      
      {/* Stars */}
      <motion.svg
        className="absolute top-20 left-10"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        animate={{ rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      >
        <path
          d="M20 5 L22 15 L30 12 L24 20 L32 25 L22 23 L20 33 L18 23 L8 25 L16 20 L10 12 L18 15 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>

      {/* Cute flower */}
      <motion.svg
        className="absolute top-40 right-20"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Petals */}
        <circle cx="25" cy="15" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="35" cy="25" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="25" cy="35" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="15" cy="25" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* Center */}
        <circle cx="25" cy="25" r="5" fill="currentColor" />
      </motion.svg>

      {/* Scribble circle */}
      <motion.svg
        className="absolute bottom-40 left-20"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        animate={{ rotate: -360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="25"
          cy="25"
          r="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="4 3"
        />
      </motion.svg>

      {/* Squiggle */}
      <motion.svg
        className="absolute top-1/2 left-1/4"
        width="80"
        height="30"
        viewBox="0 0 80 30"
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M5 15 Q15 5 25 15 Q35 25 45 15 Q55 5 65 15 Q75 25 80 15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* Heart */}
      <motion.svg
        className="absolute bottom-1/3 right-1/4"
        width="35"
        height="35"
        viewBox="0 0 35 35"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M17.5 30 C17.5 30 5 20 5 12 C5 7 8 5 11 5 C14 5 17.5 8 17.5 8 C17.5 8 21 5 24 5 C27 5 30 7 30 12 C30 20 17.5 30 17.5 30 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>

      {/* Lightning bolt */}
      <motion.svg
        className="absolute top-1/3 right-1/3"
        width="30"
        height="45"
        viewBox="0 0 30 45"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M15 5 L10 20 L18 20 L12 40 L20 18 L14 18 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>

      {/* Underline scribble */}
      <motion.svg
        className="absolute bottom-20 right-1/3"
        width="100"
        height="20"
        viewBox="0 0 100 20"
        animate={{ x: [0, -5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M5 10 Q20 5 40 10 Q60 15 80 10 Q90 5 95 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* Speech bubble */}
      <motion.svg
        className="absolute top-1/4 left-1/3"
        width="60"
        height="50"
        viewBox="0 0 60 50"
        animate={{ rotate: [0, 5, 0, -5, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect
          x="5"
          y="5"
          width="45"
          height="30"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path d="M15 35 L20 45 L25 35" fill="none" stroke="currentColor" strokeWidth="1" />
      </motion.svg>

      {/* Plus signs */}
      <motion.svg
        className="absolute bottom-1/4 left-1/2"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        animate={{ rotate: 360 }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
      >
        <path d="M12.5 5 L12.5 20 M5 12.5 L20 12.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </motion.svg>

      {/* Sparkles */}
      <motion.svg
        className="absolute top-2/3 right-20"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M15 3 L16 14 L15 25 L14 14 Z M3 15 L14 16 L25 15 L14 14 Z" fill="currentColor" />
      </motion.svg>
    </div>
  );
};
