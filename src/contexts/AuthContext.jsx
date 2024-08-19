import React, { createContext, useState, useContext } from 'react';

// Create Context
const AuthContext = createContext();

// Create Provider Component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('userEmail'));

  const login = (email, name) => {
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userName', name);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook for consuming Auth Context
export const useAuth = () => {
  return useContext(AuthContext);
};
