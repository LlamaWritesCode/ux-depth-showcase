import { motion } from 'framer-motion';

export const GradientWaves = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* First wave */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(252, 165, 165, 0.4) 0%, transparent 50%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Second wave */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 80% 30%, rgba(254, 215, 170, 0.4) 0%, transparent 50%)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [-100, 0, -100],
          y: [50, 0, 50],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Third wave */}
      <motion.div
        className="absolute inset-0 opacity-25"
        style={{
          background: 'radial-gradient(circle at 50% 80%, rgba(253, 186, 166, 0.3) 0%, transparent 50%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -80, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Fourth wave */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at 70% 70%, rgba(249, 168, 212, 0.3) 0%, transparent 50%)',
        }}
        animate={{
          scale: [1.1, 1, 1.1],
          x: [80, 0, 80],
          y: [-60, 0, -60],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Mesh gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(at 40% 20%, hsla(6, 90%, 85%, 0.3) 0px, transparent 50%),
            radial-gradient(at 80% 0%, hsla(12, 85%, 85%, 0.3) 0px, transparent 50%),
            radial-gradient(at 0% 50%, hsla(18, 88%, 88%, 0.2) 0px, transparent 50%),
            radial-gradient(at 80% 50%, hsla(0, 80%, 90%, 0.2) 0px, transparent 50%),
            radial-gradient(at 0% 100%, hsla(5, 85%, 87%, 0.3) 0px, transparent 50%),
            radial-gradient(at 80% 100%, hsla(20, 80%, 85%, 0.2) 0px, transparent 50%)
          `,
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};
