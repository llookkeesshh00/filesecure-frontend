import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState,useref } from 'react';
const Navbar = () => {
   const [isAuthenticated, setisAuthenticated] = useState(true)
   const navigate = useNavigate();

   const handleLogout = () => {
   setisAuthenticated(false);
    navigate('/');
  };
  return (
    <nav className="navbar flex justify-between p-2 bg-pink-200 rounded-e-lg">
    <div className="logo p-2">FileSecure</div>
    <div className="navbar-links flex gap-4 text-black font-bold">
      {!isAuthenticated &&<Link  className="hover:bg-pink-300 rounded-lg p-2" to="/signup">Sign Up</Link>}
      {!isAuthenticated &&<Link  className="hover:bg-pink-300 rounded-lg p-2"  to="/login">Login</Link>}
      {isAuthenticated &&<Link  className="hover:bg-pink-300 rounded-lg p-2" to="/dashboard">Dashboard</Link>}
      {isAuthenticated &&  <button onClick={handleLogout}  className="hover:bg-pink-300 rounded-lg p-2" >Logout</button>}
    </div>
  </nav>
  )
}

export default Navbar
