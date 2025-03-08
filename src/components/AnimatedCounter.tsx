import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  duration: number;
  label: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration, label }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      let startTime: number;
      let animationFrame: number;

      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(updateCount);
        }
      };

      animationFrame = requestAnimationFrame(updateCount);
      controls.start({ scale: 1, opacity: 1 });

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [inView, end, duration, controls]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-4xl font-bold text-crimson-500"
        initial={{ y: 20 }}
        animate={inView ? { y: 0 } : { y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {count}+
      </motion.div>
      <motion.div
        className="text-gray-400 mt-2"
        initial={{ y: 20 }}
        animate={inView ? { y: 0 } : { y: 20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
};

export default AnimatedCounter;