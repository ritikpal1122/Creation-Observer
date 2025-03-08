import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'primary' | 'secondary' | 'outline';
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'primary',
}) => {
  const getButtonClasses = () => {
    switch (type) {
      case 'primary':
        return 'bg-crimson-600 hover:bg-crimson-700 text-white';
      case 'secondary':
        return 'bg-accent-purple hover:bg-accent-purple/90 text-white';
      case 'outline':
        return 'bg-transparent border border-crimson-600 text-crimson-400 hover:bg-crimson-900/20';
      default:
        return 'bg-crimson-600 hover:bg-crimson-700 text-white';
    }
  };

  return (
    <motion.button
      className={`px-6 py-3 rounded-lg font-medium transition-colors ${getButtonClasses()} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 30,
      }}
    >
      <motion.span
        className="inline-block"
        whileHover={{ 
          textShadow: "0 0 8px rgb(255,255,255,0.5)"
        }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
};

export default AnimatedButton;