import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface AnimatedCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  imageUrl: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ title, description, icon, delay, imageUrl }) => {
  return (
    <motion.div
      className="bg-dark-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-dark-600"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="h-48 overflow-hidden relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>
      <div className="p-6">
        <motion.div 
          className="mb-2"
          whileHover={{ rotate: [0, 10, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
        <motion.h3 
          className="text-xl font-bold mb-2 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: delay + 0.2 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-gray-400 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: delay + 0.4 }}
        >
          {description}
        </motion.p>
        <motion.button
          className="flex items-center text-crimson-400 font-medium group"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default AnimatedCard;