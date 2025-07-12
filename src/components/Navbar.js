import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setHasAnimatedIn(true), 100);
  }, []);

  return (
    <nav className={`bg-black border-b border-gray-800/30 sticky top-0 z-50 backdrop-blur-md bg-black/95 transition-all duration-700 ease-out ${hasAnimatedIn ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Kumami Logo" 
                className="w-24 h-24 object-contain cursor-pointer hover:opacity-80 transition-opacity duration-200"
                onClick={() => {
                  window.location.href = '/';
                }}
                title="Go to Homepage"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <div className="relative group">
                <button className="text-gray-300 hover:text-[#00c2c7] px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center group">
                  Company
                  <svg className="ml-1 w-3 h-3 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute left-0 mt-1 w-32 bg-[#000000] backdrop-blur-md border border-gray-700/50 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-50">
                  <div className="py-1">
                    <a 
                      href="/about" 
                      className="block px-3 py-1.5 text-sm text-gray-300 hover:text-[#00c2c7] hover:bg-gray-800/50 transition-colors duration-200"
                    >
                      About Us
                    </a>
                  </div>
                </div>
              </div>
              
              <a href="/news" className="text-gray-300 hover:text-[#00c2c7] px-3 py-2 text-sm font-medium transition-colors duration-200">
                News Portal
              </a>
              
              <a href="/research" className="text-gray-300 hover:text-[#00c2c7] px-3 py-2 text-sm font-medium transition-colors duration-200">
                Research
              </a>
              
              <a href="/games" className="text-white px-3 py-2 text-sm font-medium relative">
                Games
                <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"></div>
              </a>
              
              <a href="/docs" className="text-gray-300 hover:text-[#00c2c7] px-3 py-2 text-sm font-medium transition-colors duration-200">
                Docs
              </a>
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-3">
              <button className="text-gray-300 hover:text-[#00c2c7] px-4 py-2 text-sm font-medium transition-colors duration-200">
                Login
              </button>
              <button className="bg-gradient-to-r from-teal-400 to-cyan-400 text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:from-teal-500 hover:to-cyan-500 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-teal-400/25">
                Sign Up
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="relative md:hidden">
        <div
          className={`absolute left-0 right-0 top-full z-50 transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-4 opacity-0 pointer-events-none'}`}
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-md border-t border-gray-800/50 shadow-lg">
            <div className="block px-3 py-2 text-gray-300 text-sm font-medium">
              Company
            </div>
            <a href="/news" className="block px-3 py-2 text-gray-300 hover:text-[#00c2c7] text-sm font-medium transition-colors duration-200">
              News Portal
            </a>
            <a href="/research" className="block px-3 py-2 text-gray-300 hover:text-[#00c2c7] text-sm font-medium transition-colors duration-200">
              Research
            </a>
            <a href="/games" className="block px-3 py-2 text-white text-sm font-medium relative">
              Games
              <div className="absolute left-3 right-3 bottom-1 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"></div>
            </a>
            <a href="/docs" className="block px-3 py-2 text-gray-300 hover:text-[#00c2c7] text-sm font-medium transition-colors duration-200">
              Docs
            </a>
            {/* Mobile Auth Buttons */}
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex flex-col space-y-3 px-3 transition-all duration-300 transform">
                <button className="w-full bg-gray-800 text-white hover:bg-[#00c2c7] hover:text-black px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 text-center shadow-md">
                  Login
                </button>
                <button className="w-full bg-gradient-to-r from-teal-400 to-cyan-400 text-black px-4 py-2.5 rounded-full text-sm font-semibold hover:from-teal-500 hover:to-cyan-500 transition-all duration-200 text-center shadow-lg">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
