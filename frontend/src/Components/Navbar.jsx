import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold tracking-tight hover:text-gray-300 transition-colors duration-300"
            >
              <span className="text-white">Code</span>
              <span className="text-gray-300">With</span>
              <span className="text-white">Shruti</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className="relative px-3 py-2 text-sm font-medium hover:text-gray-300 transition-colors duration-300 group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/about"
              className="relative px-3 py-2 text-sm font-medium hover:text-gray-300 transition-colors duration-300 group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/projects"
              className="relative px-3 py-2 text-sm font-medium hover:text-gray-300 transition-colors duration-300 group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              to="/contact"
              className="px-4 py-2 text-sm font-medium bg-white text-black rounded-md hover:bg-gray-200 transition-colors duration-300 transform hover:scale-105"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
    <button
  onClick={toggleMenu}
  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-300"
  aria-expanded={isMenuOpen}
  aria-label="Toggle menu"
>
  <div className="w-6 h-6 relative flex flex-col justify-center items-center space-y-1">
    <span
      className={`block h-0.5 w-6 bg-current rounded-sm transform transition duration-300 ease-in-out origin-center ${
        isMenuOpen ? 'rotate-45 translate-y-[6px]' : 'rotate-0 translate-y-0'
      }`}
    ></span>
    <span
      className={`block h-0.5 w-6 bg-current rounded-sm transition duration-300 ease-in-out ${
        isMenuOpen ? 'opacity-0' : 'opacity-100'
      }`}
    ></span>
    <span
      className={`block h-0.5 w-6 bg-current rounded-sm transform transition duration-300 ease-in-out origin-center ${
        isMenuOpen ? '-rotate-45 -translate-y-[6px]' : 'rotate-0 translate-y-0'
      }`}
    ></span>
  </div>
</button>

          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-gray-900 border-t border-gray-700 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block px-3 py-2 text-base font-medium hover:text-gray-300 hover:bg-gray-800 rounded-md transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 text-base font-medium hover:text-gray-300 hover:bg-gray-800 rounded-md transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="block px-3 py-2 text-base font-medium hover:text-gray-300 hover:bg-gray-800 rounded-md transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 text-base font-medium bg-white text-black rounded-md hover:bg-gray-200 transition-colors duration-300 mx-3 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
