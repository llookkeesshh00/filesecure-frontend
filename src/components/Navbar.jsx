import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
   const { isAuthenticated, logout } = useAuth();
   const navigate = useNavigate();

   const handleLogout = () => {
      logout(); // Call the logout function from context
      navigate('/'); // Redirect to home page after logout
   };

   return (
      <nav className="navbar flex justify-between fixed top-0 left-0 w-full p-1 z-50 bg-green-800 text-white">
         <div className="logo p-2 flex justify-center items-center gap-3">
            <img src="/assets/logo.svg" alt="FileSecure Logo" className="h-8" />
            <span className="font-bold">AgriSecure</span>
         </div>
         <div className="navbar-links flex gap-7 font-bold">
            {!isAuthenticated && (<Link className="hover:bg-green-600 transition-transform duration-300 transform hover:scale-105 p-2" to="/RoleSelection">Sign Up</Link> )}
            {!isAuthenticated && (<Link className="hover:bg-green-600 transition-transform duration-300 transform hover:scale-105 p-2" to="/login">Login</Link>)}
            {isAuthenticated && (<button className="relative overflow-hidden p-2 transition-transform duration-300 transform hover:scale-110">
                  <span className="text-white font-bold whitespace-nowrap animate-[move-text_2s_linear_infinite] hover:animate-none hover:scale-110">
                     Welcome, <span className="font-extralight">{localStorage.getItem('userName')+localStorage.getItem('role')}...</span>
                  </span>
               </button>
            )}
            {isAuthenticated && (<Link className="hover:bg-green-600 transition-transform flex justify-center items-center duration-300 transform hover:scale-105 p-2" to={`/${localStorage.getItem('role')}/${localStorage.getItem('userEmail')}/dashboard`}>Dashboard </Link>            )}
            {isAuthenticated && (<button onClick={handleLogout} className="hover:bg-green-600 transition-transform duration-300 transform hover:scale-105 p-2"> Logout</button> )}
            <Link className="hover:bg-green-600 flex justify-center items-center transition-transform duration-300 transform hover:scale-105 p-2" to="/about">About Us</Link>
         </div>
      </nav>
   );
}

export default Navbar;
