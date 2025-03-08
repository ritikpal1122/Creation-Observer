import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Shield, Code } from 'lucide-react';
import AnimatedText from './AnimatedText';
import AnimatedButton from './AnimatedButton';
import Modal from './Modal';

const AnimatedHero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    { icon: <Cpu className="w-6 h-6" />, title: "Performance Optimized" },
    { icon: <Shield className="w-6 h-6" />, title: "Secure by Default" },
    { icon: <Code className="w-6 h-6" />, title: "Clean Code" },
    { icon: <Zap className="w-6 h-6" />, title: "Fast Development" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-dark-900 via-crimson-900 to-dark-900 text-white">
      {/* Dynamic background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,0,0,0.15) 2px, transparent 0)',
          backgroundSize: '40px 40px'
        }}>
          <motion.div
            className="w-full h-full"
            animate={{
              backgroundPosition: ['0px 0px', '40px 40px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </div>

      {/* Animated lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px w-1/3 bg-gradient-to-r from-transparent via-crimson-500/20 to-transparent"
          style={{
            top: `${20 + i * 15}%`,
            left: `${-50 + i * 10}%`,
          }}
          animate={{
            x: ['0%', '100%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <AnimatedText
                text="Next Generation UI Development"
                type="heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-crimson-400 text-transparent bg-clip-text"
              />
              
              <AnimatedText
                text="Create stunning user interfaces with our advanced animation system. Build faster, smoother, and more engaging experiences."
                type="paragraph"
                className="text-xl text-gray-300 mb-8"
              />
              
              <div className="flex flex-wrap gap-4">
                <AnimatedButton 
                  type="primary"
                  onClick={() => setIsModalOpen(true)}
                >
                  Get Started Now
                </AnimatedButton>
                <AnimatedButton type="outline">
                  View Documentation
                </AnimatedButton>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <div className="p-2 rounded-lg bg-crimson-900/30 text-crimson-400">
                      {feature.icon}
                    </div>
                    <span className="text-gray-300">{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main display area */}
              <div className="relative bg-gradient-to-tr from-dark-800 to-crimson-900/30 rounded-2xl p-8 border border-crimson-900/20 shadow-2xl backdrop-blur-sm">
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <motion.div
                    className="absolute inset-0 opacity-30"
                    animate={{
                      background: [
                        'radial-gradient(circle at 0% 0%, #FF0000 0%, transparent 50%)',
                        'radial-gradient(circle at 100% 100%, #FF0000 0%, transparent 50%)',
                        'radial-gradient(circle at 0% 100%, #FF0000 0%, transparent 50%)',
                        'radial-gradient(circle at 100% 0%, #FF0000 0%, transparent 50%)',
                      ],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />
                </div>

                {/* Animated content */}
                <div className="relative z-10 h-[400px] flex items-center justify-center">
                  <motion.div
                    className="relative w-32 h-32"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 border-2 border-crimson-500/30 rounded-full"
                        style={{ rotate: `${i * 45}deg` }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                    <motion.div
                      className="absolute inset-0 m-8 bg-gradient-to-tr from-crimson-600 to-accent-purple rounded-full shadow-lg"
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(255,0,0,0.3)',
                          '0 0 40px rgba(255,0,0,0.6)',
                          '0 0 20px rgba(255,0,0,0.3)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-tr from-crimson-600 to-accent-purple rounded-xl"
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-accent-purple to-crimson-600 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Welcome to Next-Gen UI Development"
      >
        <div className="space-y-4">
          <p className="text-gray-300">
            Get started with our powerful UI animation system. Create stunning interfaces that captivate your users.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-300">
              <motion.div
                className="w-2 h-2 bg-crimson-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <span>Advanced animation primitives</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <motion.div
                className="w-2 h-2 bg-crimson-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
              />
              <span>Performance optimized</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <motion.div
                className="w-2 h-2 bg-crimson-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
              />
              <span>Developer friendly API</span>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <AnimatedButton
              type="primary"
              onClick={() => setIsModalOpen(false)}
            >
              Get Started
            </AnimatedButton>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AnimatedHero;