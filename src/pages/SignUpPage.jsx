import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    let signup_obj = { name, email, password }
    let res = await fetch('http://localhost:3000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signup_obj),
    });
    res = await res.json();

    if (!res.sucess) {
      toast.error('user already exists please login...');
    }

    else {
      if (res.sucess) {
        toast.success('Signup successful! Redirecting to login...');
        
        setTimeout(() => {
          navigate('/login');
        }, 1000);
        
      }
      else {
        toast.error(res.error || 'Signup failed! Please try again.');
      }
    }

    setEmail('')
    setName('')
    setPassword('')

  }

  return (
    <div>
      <div className="min-h-screen flex flex-col items-center  shadow-lg justify-center bg-gradient-to-r">

        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-xl">

          <h2 className="text-2xl font-bold text-center text-blue-700">Sign up to FileSecure</h2>

          <form onSubmit={handleSignup} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="name" id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-300" required />
            </div>
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
                sign up
              </button>
            </div>
          </form>
          <p className="text-sm text-center text-gray-500">
            Already have an account? <a href="/login" className="text-blue-600 hover:underline">login</a>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default SignUpPage
