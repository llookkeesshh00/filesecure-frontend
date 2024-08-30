import React from 'react';
import './App.css';
import './index.css'; 
import { BrowserRouter as Router, Routes, Route,useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar'
import Aboutus from './pages/aboutus';
import RoleSelection from './pages/RoleSelection';
import Farmerhome from './pages/farmer/Farmerhome'
import Buyerhome from './pages/buyer/Buyerhome'
import BuyerRequirements from './pages/buyer/uploadrequirements'
import Getcontracts from './pages/farmer/Getcontracts';
import Farmerdashboard from './pages/farmer/Farmerdashboard';
import Buyerdashboard from './pages/buyer/Buyerdashboard';
function App() {
  const location = useLocation();
  

  return (
    <>
      <div>
       <Navbar/>
      <div className="pt-14"> {/* Padding to prevent content overlap */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/roleselection" element={<RoleSelection />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path='/farmer/:user' element={<Farmerhome/>}/>
          <Route path='/farmer/:user/dashboard' element={<Farmerdashboard/>}/>
          <Route path='/farmer/:user/get-contracts' element={<Getcontracts/>}/>
          <Route path='/buyer/:user' element={<Buyerhome/>}/>
          <Route path='/buyer/:user/dashboard' element={<Buyerdashboard/>}/>
          <Route path='/buyer/:user/upload-requirements' element={<BuyerRequirements/>}/>

        
        </Routes>
      </div>
      </div>
    </>
  )
}

export default App
