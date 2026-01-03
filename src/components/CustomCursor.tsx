import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
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
  }, []);

  // Hide on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
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
  );
};
