import React from 'react';
import { BrowserRouter as Router, Routes, Route,useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import User from './pages/User'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const location = useLocation();

  return (
    <>
      <div>
        {/* Conditionally render Navbar based on the current path */}
        {location.pathname === '/' && <Navbar />}
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/signup" element={<SignUpPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/user/:username" element={<User/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
