import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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

interface ScrollHexagonsProps {
  sectionIndex: number;
}

export const ScrollHexagons = ({ sectionIndex }: ScrollHexagonsProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  const hexagons = [
    { x: '10%', y: '20%', size: 40, delay: 0, color: 'rgba(252, 165, 165, 0.15)' },
    { x: '85%', y: '15%', size: 50, delay: 0.1, color: 'rgba(253, 186, 166, 0.12)' },
    { x: '20%', y: '70%', size: 35, delay: 0.15, color: 'rgba(254, 215, 170, 0.13)' },
    { x: '75%', y: '65%', size: 45, delay: 0.2, color: 'rgba(249, 168, 212, 0.1)' },
    { x: '50%', y: '40%', size: 30, delay: 0.25, color: 'rgba(254, 202, 202, 0.14)' },
    { x: '30%', y: '45%', size: 38, delay: 0.12, color: 'rgba(252, 165, 165, 0.11)' },
    { x: '65%', y: '80%', size: 42, delay: 0.18, color: 'rgba(253, 186, 166, 0.13)' },
  ];

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full">
        {hexagons.map((hex, index) => (
          <motion.g key={index}>
            <motion.path
              d={createHexagonPath(hex.size)}
              fill={hex.color}
              stroke="rgba(252, 165, 165, 0.2)"
              strokeWidth="1.5"
              style={{
                x: hex.x,
                y: hex.y,
                opacity,
                scale,
              }}
              initial={{ rotate: 0 }}
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 8,
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
