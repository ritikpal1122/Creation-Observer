import React from 'react';
import { motion } from 'framer-motion';

const InfiniteScroll: React.FC = () => {
  const row1 = [
    "Entrance Animations",
    "Hover Effects",
    "Scroll Animations",
    "Parallax Effects",
    "Staggered Reveals",
    "Micro-interactions",
    "3D Transforms"
  ];
  
  const row2 = [
    "Text Animations",
    "Particle Effects",
    "Morphing Shapes",
    "Infinite Scrolling",
    "Gesture Controls",
    "Loading States",
    "Transitions"
  ];

  return (
    <div className="relative overflow-hidden py-4 bg-dark-800 border-y border-dark-700">
      {/* First row - left to right */}
      <div className="mb-4 flex whitespace-nowrap">
        <motion.div
          className="flex"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex">
              {row1.map((item, index) => (
                <div
                  key={index}
                  className="mx-4 flex items-center"
                >
                  <span className="text-crimson-500 mr-2">•</span>
                  <span className="text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second row - right to left */}
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex"
          animate={{
            x: [-1920, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex">
              {row2.map((item, index) => (
                <div
                  key={index}
                  className="mx-4 flex items-center"
                >
                  <span className="text-accent-purple mr-2">•</span>
                  <span className="text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteScroll;