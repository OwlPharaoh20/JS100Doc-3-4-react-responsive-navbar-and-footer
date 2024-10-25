import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, logout, isAuthenticated } = useContext(AuthContext);

  return (
    <nav
      className="bg-blue-500 dark:bg-gray-800 p-4 sticky top-0 z-50 shadow-md md:px-6 lg:px-8"
    >
      <div className="container mx-auto flex justify-between items-center md:flex-row lg:flex-row">
        <h1 className="text-white text-2xl font-bold">MyApp</h1>
        <div className="flex items-center space-x-4 md:hidden lg:hidden">
          {/* Mobile menu button */}
          <button className="text-white hover:text-gray-200 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div
          className="hidden md:flex lg:flex items-center space-x-4 w-full justify-end"
        >
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
          {isAuthenticated ? (
            <>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? 'text-gray-200 font-bold' : 'text-white hover:text-gray-200'
                }
              >
                Products
              </NavLink>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? 'text-gray-200 font-bold' : 'text-white hover:text-gray-200'
                }
              >
                Cart
              </NavLink>
              <span className="text-white">Welcome, {user.username}</span>
              <button
                onClick={logout}
                className="text-white hover:text-gray-200"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? 'text-gray-200 font-bold' : 'text-white hover:text-gray-200'
              }
            >
              Login
            </NavLink>
          )}
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              isActive ? 'text-gray-200 font-bold' : 'text-white hover:text-gray-200'
            }
          >
            FAQ
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