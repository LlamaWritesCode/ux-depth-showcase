import { motion, useAnimation } from 'framer-motion';
import { Send } from 'lucide-react';
import { useEffect } from 'react';

interface PaperPlane {
  id: number;
  delay: number;
  duration: number;
  startY: string;
  color: string;
}

const planes: PaperPlane[] = [
  {
    id: 1,
    delay: 0,
    duration: 20,
    startY: '15%',
    color: '#fca5a5', // pastel salmon-red
  },
  {
    id: 2,
    delay: 7,
    duration: 22,
    startY: '50%',
    color: '#fda4af', // pastel pink-red
  },
  {
    id: 3,
    delay: 14,
    duration: 24,
    startY: '75%',
    color: '#f9a8d4', // pastel rose
  },
];

const DottedTrail = ({ color, delay, duration }: { color: string; delay: number; duration: number }) => {
  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      await new Promise(resolve => setTimeout(resolve, delay * 1000));
      
      while (true) {
        await controls.start({
          x: ['0%', '100%'],
          opacity: [0, 1, 1, 0],
          transition: {
            duration: duration,
            ease: 'linear',
            opacity: {
              times: [0, 0.1, 0.85, 1],
            },
          },
        });
      }
    };
    
    animate();
  }, [controls, delay, duration]);

  return (
    <motion.svg
      className="absolute top-1/2 left-0 w-full h-2 -translate-y-1/2"
      initial={{ x: '0%', opacity: 0 }}
      animate={controls}
      style={{ overflow: 'visible' }}
    >
      <motion.line
        x1="0"
        y1="0"
        x2="100%"
        y2="0"
        stroke={color}
        strokeWidth="2"
        strokeDasharray="4 8"
        strokeLinecap="round"
        opacity="0.4"
      />
    </motion.svg>
  );
};

export const PaperPlanes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {planes.map((plane) => (
        <div
          key={plane.id}
          className="absolute w-full h-full"
          style={{ top: plane.startY }}
        >
          {/* Dotted Trail */}
          <DottedTrail color={plane.color} delay={plane.delay} duration={plane.duration} />
          
          {/* Paper Plane */}
          <motion.div
            initial={{ x: '-5%', opacity: 0 }}
            animate={{
              x: '105%',
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{
              duration: plane.duration,
              delay: plane.delay,
              repeat: Infinity,
              ease: 'linear',
              opacity: {
                times: [0, 0.05, 0.9, 0.95, 1],
                duration: plane.duration,
              },
            }}
            className="absolute top-1/2 -translate-y-1/2"
          >
            <motion.div
              animate={{
                y: [0, -20, -10, -25, -5, -18, 0],
                rotate: [10, 15, 8, 13, 6, 12, 10],
              }}
              transition={{
                duration: plane.duration,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Send 
                className="w-7 h-7 md:w-9 md:h-9 drop-shadow-md" 
                style={{ color: plane.color }}
              />
            </motion.div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
