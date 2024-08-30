import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BuyerRequirementsForm = () => {
  const [requirementName, setRequirementName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [region, setregion] = useState('');
  const [budget, setBudget] = useState('');

  const email = localStorage.getItem('userEmail') || ''; // Retrieve email from localStorage

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requirementData = {
      email, // Include email in the request body
      cropType: requirementName, // Map requirementName to cropType
      quantity: parseFloat(quantity), // Ensure quantity is a number
      pricePerUnit: parseFloat(budget), // Map budget to pricePerUnit
      region,
      deliveryDate, // Use deliveryDate as is
      additionalNotes: description, // Map description to additionalNotes
    };
    console.log(requirementData)

    try {
      const response = await fetch('http://localhost:3000/buyer/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify(requirementData),
      });

      const result = await response.json();
      if (result.success) {
        toast.success('uploaded your contract...');
        //Reset form fields after successful submission
        setRequirementName('');
        setQuantity('');
        setDescription('');
        setDeliveryDate('');
        setregion('');
        setBudget('');
      } else {
        toast.error(res.error || 'upload contract failed! Please try again.');

      }
    } catch (error) {
      console.error('Error submitting requirement:', error);
      alert('An error occurred while uploading the requirement');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Upload Your Requirements</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-xl ">
        <div>
          <label htmlFor="requirementName" className="block text-sm font-medium text-gray-700">Crop Type</label>
          <input type="text" id="requirementName" value={requirementName} onChange={(e) => setRequirementName(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" required />
        </div>
        <div className='flex justify-between'>
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity(in tonnes)</label>
            <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" required />
          </div>
          <div>
            <label htmlFor="deliveryDate" className="block text-sm  w-full font-medium text-gray-700">Preferred Delivery Date</label>
            <input type="date" id="deliveryDate" value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" required />
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <label htmlFor="region" className="block text-sm font-medium text-gray-700">Region(state)</label>
            <input type="text" id="region" value={region} onChange={(e) => setregion(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" required />
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Budget (Price per Unit)</label>
            <input type="number" id="budget" value={budget} onChange={(e) => setBudget(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" required />
          </div>
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Additional Notes</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" required ></textarea>
        </div>
        <div>
          <button type="submit" className="w-full py-2 px-4 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
            Upload Requirement
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default BuyerRequirementsForm;
