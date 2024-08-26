import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { AuthProvider } from './contexts/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <div className="relative h-screen overflow-y-auto">
          <div className="absolute inset-0 -z-10" style={{ opacity: 0.3, transform: 'translateY(30px)' }}>
            <svg width="50%" height="50%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M12 2L2 6V12C2 18 12 22 12 22C12 22 22 18 22 12V6L12 2Z" fill="url(#paint0_linear)" />
              <path d="M12 10C11.4477 10 11 10.4477 11 11V13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13V11C13 10.4477 12.5523 10 12 10Z" fill="white" />
              <path d="M12 8C10.3431 8 9 9.34315 9 11V13C9 14.6569 10.3431 16 12 16C13.6569 16 15 14.6569 15 13V11C15 9.34315 13.6569 8 12 8Z" fill="white" />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#003366" />
                  <stop offset="1" stop-color="#0066cc" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <App />
        </div>
      </AuthProvider>
    </Router>
  </StrictMode>
);
