import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const role = location.state?.role || 'farmer';

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [farmName, setFarmName] = useState('');
  const [locationField, setLocationField] = useState('');
  const [cropTypes, setCropTypes] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    let signup_obj = {
      name,
      email,
      password,
      role,
      phone,
      ...(role === 'farmer' && { farmDetails: {  location: locationField, cropTypes: cropTypes.split(',') } })
    };
    console.log(signup_obj)

    let res = await fetch('http://localhost:3000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signup_obj),
    });
    res = await res.json();

    if (!res.success) {
      toast.error('User already exists, please login...');
    } else {
      if (res.success) {
        toast.success('Signup successful! Redirecting to login...');
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else {
        toast.error(res.error || 'Signup failed! Please try again.');
      }
    }


    setEmail('');
    setName('');
    setPassword('');
    setFarmName('');
    setLocationField('');
    setCropTypes('');
    setPhone('');
  };

  return (
    <div className=''>
      <div className="min-h-screen flex flex-col items-center justify-center mx-auto shadow-lg">
        <div className="w-[70vw] max-w-2xl p-8 space-y-8 bg-white rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-bold text-center text-green-700">
            Sign up as a {role.charAt(0).toUpperCase() + role.slice(1)}
          </h2>

          <form onSubmit={handleSignup} className="space-y-6">
            <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
              <div className="w-full">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 transition duration-300" required />
              </div>
              <div className="w-full">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 transition duration-300" required />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="w-full">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 transition duration-300" required />
              </div>
              <div className="w-full">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Mobile number</label>
                <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 transition duration-300" required />
              </div>
            </div>

            {role === 'farmer' && (
              <>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="w-full">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                    <input type="text" id="location" value={locationField} onChange={(e) => setLocationField(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 transition duration-300" />
                  </div>
                  <div className="w-full">
                    <label htmlFor="cropTypes" className="block text-sm font-medium text-gray-700">Crop Types</label>
                    <input type="text" id="cropTypes" value={cropTypes} onChange={(e) => setCropTypes(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 transition duration-300" placeholder="Enter crops separated by commas" />
                  </div>
                </div>
              </>
            )}

            <div>
              <button type="submit" className="w-full py-2 px-4 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-transform duration-300 transform hover:scale-105">
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-sm text-center text-gray-500">
            Already have an account? <a href="/login" className="text-green-600 hover:underline">Log in</a>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUpPage;
