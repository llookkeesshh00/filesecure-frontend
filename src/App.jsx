import React from 'react';
import { BrowserRouter as Router, Routes, Route,useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import User from './pages/User'
import Identity from'./pages/Identity';
import Password from'./pages/Password';
import Document from'./pages/Document';

import './App.css'
import Navbar from './components/Navbar'

function App() {
  const location = useLocation();

  return (
    <>
      <div>
       <Navbar/>
      <div className="pt-16"> {/* Padding to prevent content overlap */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user/:useremail/:username" element={<User />} />
          <Route path="/user/:useremail/:username/password" element={<Password />} />
          <Route path="/user/:useremail/:username/document" element={<Document />} />
          <Route path="/user/:useremail/:username/identity" element={<Identity />} />
        </Routes>
      </div>
      </div>
    </>
  )
}

export default App
