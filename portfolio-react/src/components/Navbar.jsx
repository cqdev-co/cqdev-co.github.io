import React, { useState } from 'react';
import { HiSun, HiMoon, HiChevronRight } from 'react-icons/hi';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [hideLinks, setHideLinks] = useState(true);

  return (
    <nav className={`fixed w-full z-30 transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <img src="/logo192.png" alt="Logo" className="h-8 w-auto" />
          </div>
          
          {/* Navigation links in the center */}
          <div className={`hidden md:flex space-x-4 transition-opacity duration-300 ${hideLinks ? 'opacity-0' : 'opacity-100'}`}>
            <a href="http://localhost:3000/#about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700">About</a>
            <a href="http://localhost:3000/#projects" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700">Projects</a>
            <a href="http://localhost:3000/#contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700">Contact</a>
          </div>
          
          {/* Controls on the right */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-xl rounded-full p-2 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? <HiSun /> : <HiMoon />}
            </button>
            <button
              onClick={() => setHideLinks(!hideLinks)}
              className={`p-2 rounded-md transition-transform duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 ${!hideLinks ? 'rotate-180' : ''}`}
            >
              <HiChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;