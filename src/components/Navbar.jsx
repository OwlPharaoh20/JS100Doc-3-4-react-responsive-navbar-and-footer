import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';


const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-blue-500 dark:bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">MyApp</h1>
        <div className="flex items-center space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-gray-200 font-bold' : 'text-white hover:text-gray-200'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-gray-200 font-bold' : 'text-white hover:text-gray-200'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? 'text-gray-200 font-bold' : 'text-white hover:text-gray-200'
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? 'text-gray-200 font-bold' : 'text-white hover:text-gray-200'
            }
          >
            Register
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive ? 'text-gray-200 font-bold' : 'text-white hover:text-gray-200'
            }
          >
            Search
          </NavLink>
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