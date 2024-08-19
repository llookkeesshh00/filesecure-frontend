import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const navigate = useNavigate();

   const handleLogout = () => {
      setIsAuthenticated(false);
      navigate('/');
   };

   return (
      <nav className="navbar flex justify-between p-2 bg-blue-800 text-white rounded-e-lg">
           <div className="logo p-2 flex justify-center items-center gap-3">
           <img src="/asssets/logo.jpg" alt="FileSecure Logo" className="h-8" />
           <span className='font-bold'>FileSecure</span>
         </div>
         <div className="navbar-links flex gap-4 font-bold">
            {!isAuthenticated && (
               <Link className="hover:bg-blue-600 rounded-lg p-2" to="/signup">Sign Up</Link>
            )}
            {!isAuthenticated && (
               <Link className="hover:bg-blue-600 rounded-lg p-2" to="/login">Login</Link>
            )}
            {isAuthenticated && (
               <Link className="hover:bg-blue-600 rounded-lg p-2" to="/dashboard">Dashboard</Link>
            )}
            {isAuthenticated && (
               <button onClick={handleLogout} className="hover:bg-blue-600 rounded-lg p-2">Logout</button>
            )}
         </div>
      </nav>
   );
}

export default Navbar;
