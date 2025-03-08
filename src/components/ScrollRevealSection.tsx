import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const ScrollRevealSection: React.FC<ScrollRevealSectionProps> = ({
  children,
  delay = 0,
  direction = 'up',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 50 };
      case 'down':
        return { opacity: 0, y: -50 };
      case 'left':
        return { opacity: 0, x: 50 };
      case 'right':
        return { opacity: 0, x: -50 };
      default:
        return { opacity: 0, y: 50 };
    }
  };

  const getFinalPosition = () => {
    return { opacity: 1, x: 0, y: 0 };
  };

  return (
    <div ref={ref}>
      <motion.div
        initial={getInitialPosition()}
        animate={isInView ? getFinalPosition() : getInitialPosition()}
        transition={{ 
          duration: 0.8, 
          delay,
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollRevealSection;