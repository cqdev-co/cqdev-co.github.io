import React, { useState } from 'react';
import { HiSun, HiMoon, HiMenu, HiX } from 'react-icons/hi';

const Navbar = ({darkMode, setDarkMode}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // Adjust this value based on your navbar's height
      const yOffset = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({top: yOffset, behavior: 'smooth'});
    }
  };

  return (
    <nav className={`fixed w-full z-30 transition-colors duration-300 border-gray-200 shadow-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <img src="./logo192.png" alt="Logo" className="h-8 w-auto" />
          </div>
          
          {/* Navigation links for desktop */}
          <div className="hidden md:flex space-x-4">
            <button onClick={() => scrollToSection('about')} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700">About</button>
            <button onClick={() => scrollToSection('projects')} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700">Contact</button>
          </div>
          
          {/* Controls on the right */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-xl rounded-full p-2 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? <HiSun /> : <HiMoon />}
            </button>
            
            {/* Hamburger menu button for mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-xl rounded-full p-2 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {isMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-4">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700">About</button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;