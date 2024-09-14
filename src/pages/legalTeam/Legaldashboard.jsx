import React, { useState, useEffect } from 'react';

const LegalTeamPage = () => {
  const [contracts, setContracts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPendingContracts = async () => {
      try {
        const response = await fetch('http://localhost:3000/legalteam/pendingcontracts', {
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
        setContracts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPendingContracts();
  }, []);

  const handleVerification = async (contractId, action) => {
    try {
       console.log(contractId,action)
        const response = await fetch('http://localhost:3000/legalteam/verifycontract', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ contractId, action, legalTeamMember: localStorage.getItem('userEmail') })
      });

      if (!response.ok) {
        throw new Error('Failed to update contract');
      }

      // Refresh the contract list
      const updatedContracts = contracts.filter(contract => contract._id !== contractId);
      setContracts(updatedContracts);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="min-h-screen p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Pending Contracts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contracts.length > 0 ? (
          contracts.map((contract) => (
            <div key={contract._id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700">Crop Type: {contract.cropType}</h3>
              <p className="text-gray-600">Farmer: {contract.farmerEmail}</p>
              <p className="text-gray-600">Buyer: {contract.buyerEmail}</p>
              <p className="text-gray-600">Requirement ID: {contract.requirement_id}</p>
              <div className="flex justify-between mt-4">
                <button
                  className="bg-green-500 text-white py-2 px-4 rounded"
                  onClick={() => handleVerification(contract._id, 'approve')}
                >
                  Approve
                </button>
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded"
                  onClick={() => handleVerification(contract._id, 'reject')}
                >
                  Reject
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700">No pending contracts available.</p>
        )}
      </div>
    </div>
  );
};

export default LegalTeamPage;
