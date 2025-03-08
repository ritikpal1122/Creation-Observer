import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  type?: 'heading' | 'paragraph';
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, type = 'heading', className = '' }) => {
  // Split text into words
  const words = text.split(' ');

  // Variants for container of words
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each word
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={`overflow-hidden ${className} justify-center`}
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ display: 'flex', flexWrap: 'wrap' }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ marginRight: '0.25em', display: 'inline-block' }}
          className={type === 'heading' ? 'font-bold' : ''}
          whileHover={{ 
            color: '#FF3333',
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;