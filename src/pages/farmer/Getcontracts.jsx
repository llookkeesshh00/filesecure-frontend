import React, { useState, useEffect } from 'react';

const Getcontracts = () => {
    const [contracts, setContracts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Load contractMade state from localStorage
    useEffect(() => {
        const savedContracts = JSON.parse(localStorage.getItem('madeContracts')) || [];
        setContracts((prevContracts) =>
            prevContracts.map((contract) =>
                savedContracts.includes(contract._id)
                    ? { ...contract, contractMade: true }
                    : contract
            )
        );
    }, []);

    useEffect(() => {
        const fetchContracts = async () => {
            try {
                const response = await fetch('http://localhost:3000/farmer/contracts', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch contracts');
                }
                const data = await response.json();

                // Load contractMade state from localStorage
                const savedContracts = JSON.parse(localStorage.getItem('madeContracts')) || [];
                const updatedContracts = data.map((contract) =>
                    savedContracts.includes(contract._id)
                        ? { ...contract, contractMade: true }
                        : contract
                );
                setContracts(updatedContracts);
                console.log(updatedContracts);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchContracts();
    }, []);

    const handleMakeContract = async (contract) => {
        try {
            const response = await fetch('http://localhost:3000/farmer/make-contract', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    farmerEmail: localStorage.getItem('userEmail'),
                    buyerEmail: contract.buyer.email,
                    cropType: contract.cropType,
                    requirement_id: contract._id,
                })
            });

            if (!response.ok) {
                throw new Error('Failed to make contract');
            }

            const result = await response.json();
            console.log(result);

            // Disable the Make Contract button after success and update localStorage
            const updatedContracts = contracts.map((c) =>
                c._id === contract._id ? { ...c, contractMade: true } : c
            );
            setContracts(updatedContracts);

            // Save the updated contractMade state to localStorage
            const madeContracts = JSON.parse(localStorage.getItem('madeContracts')) || [];
            localStorage.setItem('madeContracts', JSON.stringify([...madeContracts, contract._id]));
        } catch (error) {
            console.error(error.message);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r p-4">
            <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Available Contracts for you....</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contracts.length > 0 ? (
                    contracts.map((contract) => (
                        <div key={contract._id} className="bg-white p-2 rounded-lg shadow-md flex flex-col space-y-4">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-gray-800">{contract.cropType.toUpperCase()}</h3>
                            </div>
                            <div className="flex gap-6">
                                <div className="mt-2 bg-gray-200 p-2 rounded-lg shadow-md text-sm">
                                    <p className="text-gray-900 font-semibold"><strong>Quantity:</strong> {contract.quantity} (in tonnes)</p>
                                    <p className="text-gray-900 font-semibold"><strong>Delivery Date:</strong> {new Date(contract.deliveryDate).toLocaleDateString()}</p>
                                    <p className="text-gray-900 font-semibold"><strong>Region:</strong> {contract.region}</p>
                                    <p className="text-gray-900 font-semibold"><strong>Price per Unit:</strong> ₹{contract.pricePerUnit}</p>
                                    <p className="text-gray-900 font-semibold"><strong>Description:</strong> {contract.description}</p>
                                </div>
                                <div className="mt-2 bg-gray-200 p-2 rounded-lg text-sm shadow-md">
                                    <h4 className="text-lg text-gray-900 font-bold">Buyer Details</h4>
                                    <p className="text-gray-900"><strong>Name:</strong> {contract.buyer.name}</p>
                                    <p className="text-gray-900"><strong>Email:</strong> {contract.buyer.email}</p>
                                    <p className="text-gray-900"><strong>Phone:</strong> {contract.buyer.phone}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleMakeContract(contract)}
                                disabled={contract.contractMade}
                                className={`mt-4 py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-transform duration-300 transform hover:scale-105 ${contract.contractMade ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 text-white hover:bg-green-600'}`}
                            >
                                {contract.contractMade ? 'Contract Made' : 'Make Contract'}
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No contracts available.</p>
                )}
            </div>
        </div>
    );
};

export default Getcontracts;
