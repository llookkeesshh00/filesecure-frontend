import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setmessage] = useState(false)
  const [messagecont, setmessagecont] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    let login_obj = { email, password }
    let res = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(login_obj),
    });
    res = await res.json();
    if (!res.sucess) {
      setmessage(true)
      if (res.message === 'please enter correct password') {
        setmessagecont('please enter correct password');
      }
      else {
        setmessagecont('user doesnot exists please sign up');

      }

    }
    else {
      localStorage.setItem('userEmail', email);
      // Fetch user details after login
      let userRes = await fetch(`http://localhost:3000/auth/getdata`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }, body: JSON.stringify(login_obj),
      });
      userRes = await userRes.json();
      // Redirect to the user's specific page and using context method common methods to all apps
      login(email, userRes.name);
      navigate(`/user/${userRes.email}/${userRes.name}`);
    }
    setEmail("");
    setPassword("");
  }


  return (
    <div className="min-h-screen flex flex-col items-center  shadow-lg justify-center bg-gradient-to-r">
      <div>
        {message && (
          <div className={`p-4 rounded-lg text-xl font-bold text-red-600 bg-violet-100 transition-opacity duration-500 ease-in-out transform ${message && 'animate-bounce'}`}>
            {messagecont}
          </div>
        )}
      </div>
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-xl">

        <h2 className="text-2xl font-bold text-center text-blue-700">Login to FileSecure</h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-300" required />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-300" required />
          </div>
          <div>
            <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform duration-300 transform hover:scale-105">
              Login
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-gray-500">
          Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
