import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LoginModal from '../auth/LoginModal'; // <-- Import the modal

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu
  const [isLoginOpen, setIsLoginOpen] = useState(false); // For login popup

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full z-40 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="shrink-0 flex items-center">
              <Link to="/codingninjas-clone" className="font-bold text-2xl text-orange-500 cursor-pointer">
                CodingNinjas
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link to="/courses" className="text-gray-700 hover:text-orange-500 font-medium">Courses</Link>
              <Link to='/practice' className="text-gray-700 hover:text-orange-500 font-medium">Practice</Link>
              <Link to='events' className="text-gray-700 hover:text-orange-500 font-medium">Events</Link>
              
              {/* Trigger Desktop Modal */}
              <button 
                onClick={() => setIsLoginOpen(true)}
                className="bg-orange-500 text-white px-5 py-2 rounded-md font-semibold hover:bg-orange-600 transition"
              >
                Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-gray-700 hover:text-orange-500 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg absolute w-full">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/courses" className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-md">Courses</Link>
              <Link to='/practice' className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-md">Practice</Link>
              <Link to='events' className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-md">Events</Link>
              
              {/* Trigger Mobile Modal */}
              <button 
                onClick={() => {
                  setIsLoginOpen(true);
                  setIsOpen(false); // Close mobile menu when opening modal
                }}
                className="w-full text-left px-3 py-2 bg-orange-500 text-white rounded-md mt-2 font-semibold"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Render the Login Modal */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
      />
    </>
  );
};

export default Navbar;