import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface InkDot {
  id: number;
  x: number;
  y: number;
}

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [inkTrail, setInkTrail] = useState<InkDot[]>([]);
  const [lastDotPosition, setLastDotPosition] = useState({ x: 0, y: 0 });

  const addInkDot = useCallback((x: number, y: number) => {
    const distance = Math.sqrt(
      Math.pow(x - lastDotPosition.x, 2) + Math.pow(y - lastDotPosition.y, 2)
    );
    
    // Only add dot if moved enough distance
    if (distance > 30) {
      const newDot: InkDot = {
        id: Date.now() + Math.random(),
        x: x + (Math.random() - 0.5) * 8,
        y: y + (Math.random() - 0.5) * 8,
      };
      
      setInkTrail(prev => [...prev.slice(-15), newDot]); // Keep last 15 dots
      setLastDotPosition({ x, y });
      
      // Remove dot after fade animation
      setTimeout(() => {
        setInkTrail(prev => prev.filter(dot => dot.id !== newDot.id));
      }, 1500);
    }
  }, [lastDotPosition]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      // Offset to match quill tip position (tip is at x=6, y=30 in 24x32 SVG, cursor offset is -12, -24)
      addInkDot(e.clientX - 6, e.clientY + 6);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('hoverable')
      ) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleHoverStart);
    document.addEventListener('mouseout', handleHoverEnd);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleHoverStart);
      document.removeEventListener('mouseout', handleHoverEnd);
    };
  }, [addInkDot]);

  // Hide on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Ink trail dots */}
      <AnimatePresence>
        {inkTrail.map((dot) => (
          <motion.div
            key={dot.id}
            className="fixed pointer-events-none z-[9998]"
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 0.3, opacity: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              left: dot.x - 3,
              top: dot.y - 3,
              width: 6,
              height: 6,
              borderRadius: '50%',
              backgroundColor: '#1a1a1a',
            }}
          />
        ))}
      </AnimatePresence>

      {/* Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 24,
          scale: isHovering ? 1.3 : 1,
          rotate: isHovering ? -15 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      >
        {/* Quill/Pen SVG */}
        <svg
          width="24"
          height="32"
          viewBox="0 0 24 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-md"
        >
          {/* Feather quill */}
          <path
            d="M22 2C22 2 18 4 16 8C14 12 12 18 10 22C8 26 6 30 6 30"
            stroke="#1a1a1a"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          {/* Feather detail */}
          <path
            d="M22 2C20 4 18 6 17 8C16 10 15.5 12 15 14C17 12 19 10 21 7C22 5.5 22.5 3.5 22 2Z"
            fill="#1a1a1a"
          />
          <path
            d="M16 8C14 10 13 12 12 15C14 13 16 11 17.5 8.5"
            stroke="#1a1a1a"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.7"
          />
          {/* Pen tip */}
          <path
            d="M6 30L7 27L9 28L6 30Z"
            fill="#1a1a1a"
          />
        </svg>
        
        {/* Ink dot that appears on hover */}
        <motion.div
          className="absolute bottom-0 left-1 w-1.5 h-1.5 rounded-full bg-foreground"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isHovering ? 1 : 0,
            opacity: isHovering ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>
    </>
  );
};
