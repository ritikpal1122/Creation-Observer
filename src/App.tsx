import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Layers, Sparkles, Code, Flame, Shield, Cpu, Rocket } from 'lucide-react';

// Import components
import AnimatedNavbar from './components/AnimatedNavbar';
import AnimatedHero from './components/AnimatedHero';
import AnimatedCard from './components/AnimatedCard';
import AnimatedCounter from './components/AnimatedCounter';
import ParallaxSection from './components/ParallaxSection';
import ScrollRevealSection from './components/ScrollRevealSection';
import AnimatedText from './components/AnimatedText';
import AnimatedButton from './components/AnimatedButton';
import InfiniteScroll from './components/InfiniteScroll';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-gray-200">
      {/* Navbar */}
      <AnimatedNavbar />
      
      {/* Hero Section */}
      <AnimatedHero />
      
      {/* Infinite Scroll Banner */}
      <InfiniteScroll />
      
      {/* Features Section */}
      <section className="py-20 px-4 bg-dark-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <ScrollRevealSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-crimson-400 to-accent-purple">
                  Stunning Animation Types
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Explore various animation techniques to enhance your user interface and create engaging experiences.
              </p>
            </ScrollRevealSection>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCard
              title="Entrance Animations"
              description="Smooth animations when elements enter the viewport for the first time."
              icon={<Flame className="h-8 w-8 text-crimson-500" />}
              delay={0.1}
              imageUrl="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            <AnimatedCard
              title="Hover Effects"
              description="Interactive animations that respond to user hover actions."
              icon={<Layers className="h-8 w-8 text-accent-purple" />}
              delay={0.2}
              imageUrl="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            <AnimatedCard
              title="Parallax Scrolling"
              description="Create depth with elements that move at different speeds while scrolling."
              icon={<Sparkles className="h-8 w-8 text-accent-gold" />}
              delay={0.3}
              imageUrl="https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            <AnimatedCard
              title="Micro-interactions"
              description="Small, subtle animations that provide feedback for user actions."
              icon={<Code className="h-8 w-8 text-accent-blue" />}
              delay={0.4}
              imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-crimson-900/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCounter end={150} duration={2.5} label="Animation Types" />
            <AnimatedCounter end={1200} duration={2.5} label="Happy Users" />
            <AnimatedCounter end={50} duration={2.5} label="Components" />
            <AnimatedCounter end={99} duration={2.5} label="Satisfaction Rate" />
          </div>
        </div>
      </section>
      
      {/* Parallax Section */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        title="Immersive Experiences"
        subtitle="Create stunning visual effects that captivate your audience"
      />
      
      {/* Features Section with Scroll Reveal */}
      <section className="py-20 px-4 bg-dark-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-crimson-700/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-accent-purple/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollRevealSection direction="left">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-crimson-400 to-accent-purple">
                    Smooth Scroll Animations
                  </span>
                </h2>
                <p className="text-gray-400 mb-8">
                  Enhance user experience with elements that animate as they enter the viewport. 
                  These subtle animations guide the user's attention and create a more engaging interface.
                </p>
                <ul className="space-y-4">
                  {['Fade in animations', 'Slide in effects', 'Scale animations', 'Staggered reveals'].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      <motion.span 
                        className="h-6 w-6 rounded-full bg-crimson-900 text-crimson-300 flex items-center justify-center mr-3"
                        whileHover={{ scale: 1.2, backgroundColor: '#FF0000', color: '#ffffff' }}
                      >
                        ✓
                      </motion.span>
                      <span className="text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-8">
                  <AnimatedButton type="primary">Learn More</AnimatedButton>
                </div>
              </div>
            </ScrollRevealSection>
            
            <ScrollRevealSection direction="right" delay={0.2}>
              <motion.div 
                className="bg-gradient-to-br from-crimson-900 to-accent-purple/50 p-1 rounded-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-dark-800 rounded-lg overflow-hidden shadow-xl">
                  <div className="p-8">
                    <motion.div 
                      className="w-full h-[300px] bg-gradient-to-tr from-crimson-700 to-accent-purple rounded-lg flex items-center justify-center relative overflow-hidden"
                      animate={{ 
                        boxShadow: [
                          "0px 0px 0px rgba(0,0,0,0.2)",
                          "0px 10px 30px rgba(0,0,0,0.2)",
                          "0px 0px 0px rgba(0,0,0,0.2)"
                        ]
                      }}
                      transition={{ duration: 5, repeat: Infinity }}
                    >
                      {/* Animated background elements */}
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute rounded-full bg-white bg-opacity-10"
                          style={{
                            width: Math.random() * 60 + 20,
                            height: Math.random() * 60 + 20,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{ 
                            x: [0, Math.random() * 100 - 50, 0],
                            y: [0, Math.random() * 100 - 50, 0],
                            opacity: [0.1, 0.3, 0.1],
                          }}
                          transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                      
                      <motion.div
                        className="text-white text-6xl relative z-10"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                      >
                        ✨
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </ScrollRevealSection>
          </div>
        </div>
      </section>
      
      {/* Additional Feature Cards */}
      <section className="py-20 px-4 bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <ScrollRevealSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-crimson-400 to-accent-gold">
                  Advanced Animation Techniques
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Take your UI to the next level with these sophisticated animation patterns.
              </p>
            </ScrollRevealSection>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCard
              title="Infinite Scrolling"
              description="Create endless content streams that load as users scroll down the page."
              icon={<Rocket className="h-8 w-8 text-crimson-500" />}
              delay={0.1}
              imageUrl="https://images.unsplash.com/photo-1550645612-83f5d594b671?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            <AnimatedCard
              title="3D Transforms"
              description="Add depth and perspective to your UI with 3D rotation and translation effects."
              icon={<Cpu className="h-8 w-8 text-accent-blue" />}
              delay={0.2}
              imageUrl="https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            <AnimatedCard
              title="Morphing Shapes"
              description="Smoothly transform elements from one shape to another for fluid transitions."
              icon={<Shield className="h-8 w-8 text-accent-purple" />}
              delay={0.3}
              imageUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            <AnimatedCard
              title="Particle Effects"
              description="Create dynamic particle systems for backgrounds, transitions, and interactive elements."
              icon={<Zap className="h-8 w-8 text-accent-gold" />}
              delay={0.4}
              imageUrl="https://images.unsplash.com/photo-1506729623306-b5a934d88b53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-crimson-900 to-dark-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10"></div>
        {/* Animated particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -1000],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <ScrollRevealSection>
            <AnimatedText
              text="Ready to Create Amazing Animations?"
              type="heading"
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
            />
            <AnimatedText
              text="Start building beautiful, interactive user interfaces today with our animation components."
              type="paragraph"
              className="text-xl opacity-90 mb-10 max-w-2xl mx-auto"
            />
            <div className="flex flex-wrap justify-center gap-4">
              <AnimatedButton className="bg-crimson-600 text-white hover:bg-crimson-700">
                Get Started
              </AnimatedButton>
              <AnimatedButton className="bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10">
                View Documentation
              </AnimatedButton>
            </div>
          </ScrollRevealSection>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-dark-900 text-white py-12 border-t border-dark-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <motion.h3 
                className="text-xl font-bold mb-4 text-crimson-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                AnimatedUI
              </motion.h3>
              <motion.p 
                className="text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Beautiful animations for React applications
              </motion.p>
            </div>
            
            {['Resources', 'Company', 'Support'].map((category, categoryIndex) => (
              <div key={category}>
                <motion.h3 
                  className="text-xl font-bold mb-4 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + categoryIndex * 0.1 }}
                >
                  {category}
                </motion.h3>
                <ul className="space-y-2">
                  {['Documentation', 'Tutorials', 'Examples', 'Blog'].map((item, itemIndex) => (
                    <motion.li 
                      key={item}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + categoryIndex * 0.1 + itemIndex * 0.05 }}
                    >
                      <a href="#" className="text-gray-400 hover:text-crimson-400 transition-colors">
                        {item}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <motion.div 
            className="border-t border-dark-700 mt-12 pt-8 text-center text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p>© 2025 AnimatedUI. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;