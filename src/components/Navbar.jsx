// src/components/Navbar.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-blue-500 dark:bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">MyApp</h1>
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-200">
            About
          </Link>
          <Link to="/services" className="text-white hover:text-gray-200">
            Services
          </Link>
          <button
            onClick={toggleTheme}
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
