import React, { useState } from 'react';
import { HiMenuAlt3, HiX, HiSun, HiMoon } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className="bg-gray-800 text-white fixed w-full z-10">
      <div className="max-w-14xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo on the far left */}
          <div className="shrink-0">
            <img src="/logo192.png" alt="Logo" className="h-8 w-8" />
          </div>
          
          {/* Navigation and other elements on the far right */}
          <div className="flex items-center">
            <div className="hidden md:flex space-x-4 ml-auto"> {/* This ml-auto pushes everything to the right */}
              {/* Navigation Links */}
              <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors">About</a>
              <a href="#portfolio" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors">Portfolio</a>
              <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors">Contact</a>
              {/* Theme Toggle */}
              <button onClick={() => setDarkMode(!darkMode)} className="text-xl rounded-full p-2 hover:bg-gray-700 transition">
                {darkMode ? <HiSun /> : <HiMoon />}
              </button>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden ml-auto">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white hover:bg-gray-700 p-2 rounded-md">
                {isOpen ? <HiX className="h-6 w-6" /> : <HiMenuAlt3 className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 pb-3">
          <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700">Home</a>
          <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700">About</a>
          <a href="#portfolio" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700">Portfolio</a>
          <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
