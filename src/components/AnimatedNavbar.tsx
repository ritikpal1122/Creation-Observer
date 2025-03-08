import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Flame } from 'lucide-react';

const AnimatedNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { 
      name: 'Home', 
      link: '#' 
    },
    { 
      name: 'Features', 
      link: '#',
      dropdown: ['Animation Types', 'Components', 'Examples']
    },
    { 
      name: 'About', 
      link: '#' 
    },
    { 
      name: 'Contact', 
      link: '#' 
    },
  ];

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <nav className="bg-dark-900 border-b border-dark-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <motion.div 
              className="flex-shrink-0 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Flame className="h-6 w-6 text-crimson-500 mr-2" />
              <span className="text-crimson-500 font-bold text-xl">Creation Observer</span>
            </motion.div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.dropdown ? (
                    <button 
                      className="flex items-center text-gray-300 hover:text-crimson-400 px-3 py-2 rounded-md text-sm font-medium"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  ) : (
                    <a
                      href={item.link}
                      className="text-gray-300 hover:text-crimson-400 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item.name}
                    </a>
                  )}
                </motion.div>
                
                {/* Dropdown menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-dark-800 ring-1 ring-dark-700 ring-opacity-5"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="py-1">
                          {item.dropdown.map((dropdownItem) => (
                            <a
                              key={dropdownItem}
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-300 hover:bg-dark-700 hover:text-crimson-400"
                            >
                              {dropdownItem}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
            >
              <a
                href="#"
                className="bg-crimson-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-crimson-600 transition-colors"
              >
                Get Started
              </a>
            </motion.div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <motion.button
              className="text-gray-300 hover:text-crimson-400"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-dark-800"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.dropdown ? (
                    <div>
                      <button 
                        className="w-full flex items-center justify-between text-gray-300 hover:text-crimson-400 px-3 py-2 rounded-md text-base font-medium"
                        onClick={() => toggleDropdown(item.name)}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            className="pl-4 space-y-1"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <a
                                key={dropdownItem}
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-crimson-400 hover:bg-dark-700"
                              >
                                {dropdownItem}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={item.link}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-crimson-400 hover:bg-dark-700"
                    >
                      {item.name}
                    </a>
                  )}
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                className="pt-2"
              >
                <a
                  href="#"
                  className="block w-full text-center bg-crimson-700 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-crimson-600"
                >
                  Get Started
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default AnimatedNavbar;