import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoleSelection = () => {
    const navigate = useNavigate();

    const handleRoleSelection = (role) => {
        navigate('/signup', { state: { role } });
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-green-800 mb-8">Select Your Role</h1>
            <div className="flex space-x-8">
                <button onClick={() => handleRoleSelection('farmer')} className="px-8 py-4 bg-green-600 text-white font-medium rounded hover:bg-green-600   transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                    I am a Farmer
                </button>
                <button onClick={() => handleRoleSelection('buyer')}  className="px-8 py-4 bg-green-600 text-white font-medium  rounded hover:bg-green-600  transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                    I am a Buyer
                </button>
            </div>
        </div>
    );
};

export default RoleSelection;
