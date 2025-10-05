import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface PaperPlane {
  id: number;
  delay: number;
  duration: number;
  startY: string;
  path: string;
  rotation: number;
}

const planes: PaperPlane[] = [
  {
    id: 1,
    delay: 0,
    duration: 25,
    startY: '20%',
    path: 'M-10,0 Q25,10 50,5 T110,0',
    rotation: 15,
  },
  {
    id: 2,
    delay: 8,
    duration: 30,
    startY: '60%',
    path: 'M-10,0 Q30,-8 60,-5 T110,0',
    rotation: -10,
  },
  {
    id: 3,
    delay: 15,
    duration: 28,
    startY: '80%',
    path: 'M-10,0 Q35,12 70,8 T110,0',
    rotation: 20,
  },
];

export const PaperPlanes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {planes.map((plane) => (
        <div
          key={plane.id}
          className="absolute w-full h-full"
          style={{ top: plane.startY }}
        >
          <motion.div
            initial={{ x: '-10%', opacity: 0 }}
            animate={{
              x: '110%',
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{
              duration: plane.duration,
              delay: plane.delay,
              repeat: Infinity,
              ease: 'linear',
              opacity: {
                times: [0, 0.1, 0.8, 0.9, 1],
                duration: plane.duration,
              },
            }}
            className="absolute"
          >
            <motion.div
              animate={{
                y: [0, -30, -15, -40, -10, -35, 0],
                rotate: [
                  plane.rotation,
                  plane.rotation + 5,
                  plane.rotation - 3,
                  plane.rotation + 4,
                  plane.rotation - 2,
                  plane.rotation + 3,
                  plane.rotation,
                ],
              }}
              transition={{
                duration: plane.duration,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Send className="w-6 h-6 md:w-8 md:h-8 text-purple-300/40" />
            </motion.div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
