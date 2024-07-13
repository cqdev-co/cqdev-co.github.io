import React, { useState } from 'react';
import { HiSun, HiMoon, HiMenu, HiX, HiArrowLeft } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    closeMenu();
    if (sectionId === 'home') {
      window.scrollTo({ top: 2, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 64; // Adjust this value based on your navbar's height
        const yOffset = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        window.scrollTo({ top: yOffset, behavior: 'smooth' });
      }
    }
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-30 transition-colors duration-300 border-gray-200 shadow-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo or Back Arrow on the left */}
          <div className="flex-shrink-0">
            {location.pathname === '/pearai' ? (
              <button onClick={goBack} className="text-xl rounded-full p-2 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                <HiArrowLeft />
              </button>
            ) : (
              <motion.img 
                src="./logo192.png" 
                alt="Logo" 
                className="h-8 w-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              />
            )}
          </div>

          {/* Navigation links for desktop */}
          {location.pathname !== '/pearai' && (
            <motion.div 
              className="hidden md:flex space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <button onClick={() => scrollToSection('home')} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700">Home</button>
              <button onClick={() => scrollToSection('about')} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700">About</button>
              <button onClick={() => scrollToSection('projects')} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700">Projects</button>
            </motion.div>
          )}

          {/* Controls on the right */}
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="text-xl rounded-full p-2 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              {darkMode ? <HiSun /> : <HiMoon />}
            </motion.button>

            {/* Hamburger menu button for mobile */}
            <motion.button
              onClick={toggleMenu}
              className="md:hidden text-xl rounded-full p-2 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              {isMenuOpen ? <HiX /> : <HiMenu />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && location.pathname !== '/pearai' && (
        <motion.div 
          className="md:hidden"
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-4">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700">About</button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700">Projects</button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
