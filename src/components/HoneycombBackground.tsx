import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface Hexagon {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

export const HoneycombBackground = () => {
  const hexagons = useMemo(() => {
    const colors = [
      'rgba(252, 165, 165, 0.08)', // salmon
      'rgba(253, 186, 166, 0.08)', // coral
      'rgba(254, 215, 170, 0.08)', // peach
      'rgba(249, 168, 212, 0.06)', // pink
      'rgba(254, 202, 202, 0.07)', // light salmon
    ];

    const hexArray: Hexagon[] = [];
    const cols = 12;
    const rows = 10;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const offsetX = row % 2 === 0 ? 0 : 50;
        hexArray.push({
          id: row * cols + col,
          x: col * 100 + offsetX,
          y: row * 86,
          size: Math.random() * 40 + 50,
          delay: Math.random() * 5,
          duration: Math.random() * 8 + 12,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    }

    return hexArray;
  }, []);

  const createHexagonPath = (size: number) => {
    const angle = Math.PI / 3;
    const points = [];
    for (let i = 0; i < 6; i++) {
      const x = size * Math.cos(angle * i);
      const y = size * Math.sin(angle * i);
      points.push(`${x},${y}`);
    }
    return `M ${points.join(' L ')} Z`;
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <svg className="w-full h-full" style={{ minWidth: '100vw', minHeight: '100vh' }}>
        {hexagons.map((hex) => (
          <motion.g key={hex.id}>
            <motion.path
              d={createHexagonPath(hex.size)}
              fill={hex.color}
              stroke="rgba(252, 165, 165, 0.1)"
              strokeWidth="1"
              initial={{
                x: hex.x,
                y: hex.y,
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                x: hex.x,
                y: hex.y,
                scale: [0.8, 1, 0.9, 1],
                opacity: [0, 1, 0.8, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: hex.duration,
                delay: hex.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  );
};
