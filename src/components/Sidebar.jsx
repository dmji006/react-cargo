import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    {
      path: '/dashboard',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      label: 'Home'
    },
    {
      path: '/my-cars',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm-5 14H10v-4h4v4z" />
        </svg>
      ),
      label: 'My Cars'
    },
    {
      path: '/rented-car',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Rented Car'
    }
  ];

  return (
    <div className="w-64 bg-[#2B4865] min-h-screen fixed left-0 top-0">
      {/* User Profile Section */}
      <div className="p-6 text-center text-white">
        <div className="w-20 h-20 bg-[#8C6FE9] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
          MD
        </div>
        <h2 className="text-lg font-semibold">Marc Jian Dasalla</h2>
        <p className="text-sm text-gray-300">user</p>
      </div>

      {/* Navigation Links */}
      <nav className="mt-6">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center px-6 py-3 text-white hover:bg-blue-700 transition-colors ${
              isActive(item.path) ? 'bg-blue-700' : ''
            }`}
          >
            {item.icon}
            <span className="ml-3">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="absolute bottom-8 w-full px-6">
        <button
          onClick={() => {
            // Handle logout logic here
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('user');
            window.location.href = '/';
          }}
          className="flex items-center text-white hover:text-gray-300 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span className="ml-3">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar; 