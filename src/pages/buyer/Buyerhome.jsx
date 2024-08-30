import React from 'react';
import { useNavigate } from 'react-router-dom';

const Buyerhome = () => {
  const navigate = useNavigate();

  const handleUploadClick = () => {
    // Navigate to the upload requirements page
    const userName = localStorage.getItem('userName');
    navigate(`/buyer/${userName}/upload-requirements`); 
  };

  return (
    <div className="min-h-screen bg-gray-1,00 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Welcome to AgriSecure</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Our Services</h2>
          <p className="mt-4 text-gray-600">
            At AgriSecure, we ensure that your product requirements are met with the highest quality standards. Our services include:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Quality checks on all products</li>
            <li>Real-time delivery tracking</li>
            <li>Secure and reliable logistics</li>
            <li>End-to-end support for your agricultural needs</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Safe Delivery Assurance</h2>
          <p className="mt-4 text-gray-600">
            We take pride in ensuring that the end product reaches your hands safely. Our logistics team is equipped with the best practices to handle and deliver your orders with care.
          </p>
        </section>

        <div className="text-center">
          <button
            onClick={handleUploadClick}
            className="px-6 py-3 bg-green-700 text-white font-bold rounded-md shadow-md hover:bg-green-600 transition-transform transform hover:scale-105"
          >
            Upload Your Requirements
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buyerhome;
