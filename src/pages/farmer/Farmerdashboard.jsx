import React, { useState, useEffect } from 'react';

const Farmerdashboard = () => {
    const [contracts, setContracts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchContracts = async () => {
            try {
                const userEmail = localStorage.getItem('userEmail'); // Get user email from localStorage
                const response = await fetch(`http://localhost:3000/farmer/activecontracts/${userEmail}`, {
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

                // Filter contracts to only include those with 'approved' status
                const approvedContracts = data.contracts.filter(contract => contract.status === 'approved');
                setContracts(approvedContracts);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchContracts();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="min-h-screen p-4 ">
            <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Your Approved Contracts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contracts.length > 0 ? (
                    contracts.map((contract) => (
                        <div key={contract._id} className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-700">Crop Type: {contract.cropType}</h3>
                            <p className="text-gray-600">Buyer: {contract.buyerEmail}</p>
                            <p className="text-gray-600">Requirement ID: {contract.requirement_id}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center font-bold text-2xl text-gray-700">No approved contracts available.</p>
                )}
            </div>
        </div>
    );
};

export default Farmerdashboard;
