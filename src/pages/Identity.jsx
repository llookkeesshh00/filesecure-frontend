import React, { useState, useEffect } from 'react';

const Identity = () => {
  const [files, setFiles] = useState({
    aadhar: null,
    pan: null,
    voterId: null,
    drivingLicense: null,
  });

  const [uploadStatus, setUploadStatus] = useState({
    aadhar: false,
    pan: false,
    voterId: false,
    drivingLicense: false,
  });

  useEffect(() => {
    // Load upload status from localStorage on component mount
    const savedStatus = JSON.parse(localStorage.getItem('uploadStatus'));
    if (savedStatus) {
      setUploadStatus(savedStatus);
    }
  }, []);

  const handleFileChange = (e, type) => {
    const newFiles = { ...files, [type]: e.target.files[0] };
    setFiles(newFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const userId = localStorage.getItem('userEmail');

    formData.append('userId', userId);

    // Append files and their corresponding types
    for (let key in files) {
      if (files[key]) {
        formData.append(key, files[key]);
      }
    }
    

    try {
      let res = await fetch('http://localhost:3000/upload/identity', {
        method: 'POST',
        body: formData,
      });

      res = await res.json();
      console.log(res);

      if (res.success) {
        setUploadStatus(res.uploadStatus); // Save upload status to localStorage
        localStorage.setItem('uploadStatus', JSON.stringify(res.uploadStatus));
      } else {
        console.error('Upload failed:', res.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">Upload Your Identity Cards</h2>
      <form onSubmit={handleSubmit} className="w-[85vw] mx-auto shadow-2xl p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <CardUpload title="Aadhar Card" onChange={(e) => handleFileChange(e, 'aadhar')} disabled={uploadStatus.aadhar} status={uploadStatus.aadhar ? 'Uploaded successfully' : ''} />
          <CardUpload title="PAN Card" onChange={(e) => handleFileChange(e, 'pan')} disabled={uploadStatus.pan} status={uploadStatus.pan ? 'Uploaded successfully' : ''} />
          <CardUpload title="Voter ID" onChange={(e) => handleFileChange(e, 'voterId')} disabled={uploadStatus.voterId} status={uploadStatus.voterId ? 'Uploaded successfully' : ''} />
          <CardUpload title="Driving License" onChange={(e) => handleFileChange(e, 'drivingLicense')} disabled={uploadStatus.drivingLicense} status={uploadStatus.drivingLicense ? 'Uploaded successfully' : ''} />
        </div>
        <button
          type="submit"
          className="w-full mt-8 bg-blue-600 text-white py-2 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:bg-blue-700"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

const CardUpload = ({ title, onChange, disabled, status }) => {
  return (
    <div className="p-4 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-lg font-semibold text-blue-600 mb-2">{title}</h3>
      <input
        type="file"
        className="w-full p-2 border border-blue-200 rounded-lg bg-white transition-transform duration-300 transform hover:scale-105"
        onChange={onChange}
        disabled={disabled}
      />
      {status && <p className="text-green-600 mt-2">{status}</p>}
    </div>
  );
};

export default Identity;
