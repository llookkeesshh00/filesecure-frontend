import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
   const { isAuthenticated, logout } = useAuth();
   const navigate = useNavigate();


   const handleLogout = () => {
      logout(); // Call the logout function from context
      navigate('/login'); // Redirect to login page after logout
   };

   return (
      <nav className="navbar flex justify-between  fixed top-0 left-0 w-full p- z-50 bg-blue-800 text-white">
           <nav className="fixed top-0 left-0 w-full bg-blue-900 text-white shadow-md z-50"></nav>
         <div className="logo p-2 flex justify-center items-center gap-3">
            <img src="/asssets/logo.jpg" alt="FileSecure Logo" className="h-8" />
            <span className='font-bold'>FileSecure</span>
         </div>
         <div className="navbar-links flex gap-4 font-bold">
            {!isAuthenticated && (<Link className="hover:bg-blue-600 rounded-lg p-2" to="/signup">Sign Up</Link>)}
            {!isAuthenticated && (<Link className="hover:bg-blue-600 rounded-lg p-2" to="/login" >Login</Link>)}
            {isAuthenticated &&  (<button className="rounded-lg p-2"><span className="text-white font-thin">Welcome, {localStorage.getItem('userName')}...</span></button>)}
            {isAuthenticated &&  (<button className="hover:bg-blue-600 rounded-lg p-2">DashBoard</button>)}
            {isAuthenticated &&  (<button onClick={handleLogout} className="hover:bg-blue-600 rounded-lg p-2">Logout</button>)}
         </div>
      </nav>
   );
}

export default Navbar;
