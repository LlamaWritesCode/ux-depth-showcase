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

      {/* Lightbulb */}
      <motion.svg
        className="absolute top-1/2 right-10"
        width="35"
        height="50"
        viewBox="0 0 35 50"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M17.5 5 Q10 5 10 12 Q10 18 14 22 L14 30 L21 30 L21 22 Q25 18 25 12 Q25 5 17.5 5 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="14" y="30" width="7" height="4" stroke="currentColor" strokeWidth="1.5" fill="none" rx="1" />
        <path d="M15 34 Q17.5 36 20 34" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M12 15 L8 13 M23 15 L27 13 M17.5 8 L17.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </motion.svg>

      {/* Coffee cup */}
      <motion.svg
        className="absolute bottom-1/2 left-10"
        width="40"
        height="45"
        viewBox="0 0 40 45"
        animate={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M10 15 L10 30 Q10 35 15 35 L25 35 Q30 35 30 30 L30 15 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M30 20 L35 20 Q38 20 38 23 Q38 26 35 26 L30 26" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M8 12 L32 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* Steam lines */}
        <path d="M15 8 Q15 5 17 3" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
        <path d="M20 8 Q20 5 22 3" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
        <path d="M25 8 Q25 5 27 3" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
      </motion.svg>

      {/* Asterisk */}
      <motion.svg
        className="absolute top-1/4 right-10"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        <path d="M15 5 L15 25 M8 8 L22 22 M8 22 L22 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </motion.svg>

      {/* Exclamation mark */}
      <motion.svg
        className="absolute bottom-1/2 right-1/2"
        width="20"
        height="40"
        viewBox="0 0 20 40"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M10 5 L10 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="10" cy="30" r="2.5" fill="currentColor" />
      </motion.svg>

      {/* Musical note */}
      <motion.svg
        className="absolute top-3/4 left-1/3"
        width="30"
        height="40"
        viewBox="0 0 30 40"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="8" cy="32" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 32 L13 8 L25 5 L25 25" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="25" cy="25" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </motion.svg>

      {/* Small dots cluster */}
      <motion.svg
        className="absolute top-1/3 left-10"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="10" cy="10" r="2" fill="currentColor" />
        <circle cx="20" cy="8" r="1.5" fill="currentColor" />
        <circle cx="30" cy="12" r="2.5" fill="currentColor" />
        <circle cx="15" cy="20" r="2" fill="currentColor" />
        <circle cx="25" cy="22" r="1.5" fill="currentColor" />
        <circle cx="18" cy="30" r="2" fill="currentColor" />
      </motion.svg>

      {/* Pencil */}
      <motion.svg
        className="absolute bottom-1/3 left-1/3"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        animate={{ rotate: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M10 40 L20 30 L35 15 L40 20 L25 35 L15 45 Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        <path d="M20 30 L25 35" stroke="currentColor" strokeWidth="1.5" />
        <path d="M35 15 L40 20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 40 L8 48 L15 45" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      </motion.svg>

      {/* Cloud */}
      <motion.svg
        className="absolute top-1/2 left-1/2"
        width="60"
        height="40"
        viewBox="0 0 60 40"
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M15 25 Q15 20 20 20 Q20 15 27 15 Q34 15 34 20 Q40 20 40 25 Q40 30 34 30 L20 30 Q15 30 15 25 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </motion.svg>

      {/* Question mark */}
      <motion.svg
        className="absolute bottom-20 left-1/4"
        width="25"
        height="45"
        viewBox="0 0 25 45"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M8 10 Q8 5 12.5 5 Q17 5 17 10 Q17 15 12.5 18 L12.5 25" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="12.5" cy="33" r="2.5" fill="currentColor" />
      </motion.svg>

      {/* Sun */}
      <motion.svg
        className="absolute top-10 right-1/3"
        width="45"
        height="45"
        viewBox="0 0 45 45"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="22.5" cy="22.5" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M22.5 5 L22.5 12 M22.5 33 L22.5 40 M5 22.5 L12 22.5 M33 22.5 L40 22.5 M10 10 L15 15 M30 30 L35 35 M10 35 L15 30 M30 15 L35 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </motion.svg>

      {/* Checkmark */}
      <motion.svg
        className="absolute bottom-10 right-1/4"
        width="35"
        height="35"
        viewBox="0 0 35 35"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M8 18 L14 25 L27 10" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </motion.svg>
    </div>
  );
};
