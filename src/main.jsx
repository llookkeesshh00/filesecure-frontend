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
        <div className="relative min-h-screen overflow-y-auto">
          <div className="fixed top-0 left-0 w-full h-full" style={{ backgroundImage: "url('/assets/background.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", opacity: 0.75, zIndex: -1}}></div>
          <div className="relative z-10">
            <App />
          </div>
        </div>
      </AuthProvider>
    </Router>
  </StrictMode>
);
