import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  imageUrl: string;
  title: string;
  subtitle: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ imageUrl, title, subtitle }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], ["50px", "0px", "-50px"]);

  return (
    <div ref={ref} className="relative h-[60vh] overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, scale: 1.1 }}
      >
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-crimson-900/50 to-dark-900/80" />
      </motion.div>
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 z-[1]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,0,0,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        <motion.div 
          className="w-full h-full"
          animate={{ 
            x: [0, 30, 0],
            y: [0, 30, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center"
        style={{ opacity, scale, y: textY }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-crimson-300"
          animate={{
            textShadow: [
              "0 0 5px rgba(255,0,0,0.3)",
              "0 0 15px rgba(255,0,0,0.5)",
              "0 0 5px rgba(255,0,0,0.3)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {title}
        </motion.h2>
        <p className="text-xl md:text-2xl max-w-2xl text-gray-200">{subtitle}</p>
        
        {/* Animated particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-crimson-500"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.6,
            }}
            animate={{
              y: [0, -100],
              x: [0, Math.random() * 50 - 25],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ParallaxSection;