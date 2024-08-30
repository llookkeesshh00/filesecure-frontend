import React from 'react';
import { useNavigate } from 'react-router-dom';

const FarmerHome = () => {
  const navigate = useNavigate();

  const handleGetContractsClick = () => {
    // Navigate to the contracts page
    const userName = localStorage.getItem('userEmail');
    navigate(`/farmer/${userName}/get-contracts`);
   
  };

  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Welcome to AgriSecure</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">What Farmers Should Do</h2>
          <p className="mt-4 text-gray-600">
            As a farmer, you can participate in our contract farming system by:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Reviewing and accepting contracts from buyers</li>
            <li>Updating your progress to keep buyers informed</li>
            <li>Ensuring timely delivery of products as per the contract terms</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Benefits of Contract Farming</h2>
          <p className="mt-4 text-gray-600">
            By participating in our contract farming system, you will receive:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>20% investment in advance from the buyer to support your initial costs</li>
            <li>The remaining payment upon successful delivery of the product</li>
            <li>Assured market for your produce, reducing the risk of price fluctuations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Ensuring Integrity</h2>
          <p className="mt-4 text-gray-600">
            To ensure integrity between farmers and buyers, we:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Maintain transparent and clear contracts outlining all terms and conditions</li>
            <li>Monitor and verify progress updates regularly</li>
            <li>Implement a dispute resolution mechanism to address any issues promptly</li>
          </ul>
        </section>

        <div className="text-center">
          <button
            onClick={handleGetContractsClick}
            className="px-6 py-3 bg-green-700 text-white font-bold rounded-md shadow-md hover:bg-green-600 transition-transform transform hover:scale-105"
          >
            Get Contracts
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmerHome;
