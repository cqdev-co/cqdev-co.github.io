import React, { useState } from 'react';
import { HiMenuAlt3, HiX, HiSun, HiMoon, HiChevronRight } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [hideLinks, setHideLinks] = useState(true);

  return (
    <nav className="bg-white text-black shadow-sm fixed w-full z-30">
      <div className="max-w-14xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo on the far left */}
          <div className="shrink-0">
            <img src="/logo192.png" alt="Logo" className="h-8 w-8" />
          </div>
          
          {/* Navigation and other elements on the far right */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`text-xl rounded-full p-2 transition icon-fade-in ${!hideLinks && 'icon-visible'}`}
            >
              {darkMode ? <HiSun /> : <HiMoon />}
            </button>
            <button
              onClick={() => setHideLinks(!hideLinks)}
              className={`text-black hover:text-white hover:bg-gray-700 p-2 rounded-md icon-animation ${!hideLinks && 'rotate-180'}`}
            >
              <HiChevronRight className="h-6 w-6" />
            </button>
            {/* Mobile menu button */}
            <div className="md:hidden ml-auto">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black hover:text-white hover:bg-gray-700 p-2 rounded-md"
              >
                {isOpen ? <HiX className="h-6 w-6" /> : <HiMenuAlt3 className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white pb-3">
          <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-200">About</a>
          <a href="#portfolio" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-200">Portfolio</a>
          <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-200">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
