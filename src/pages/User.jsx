import React from 'react';
import { useParams } from 'react-router-dom';


const User = () => {
  const params = useParams();

  return (
    <div className="main  max-w-[75vw] mx-auto mt-10  text-white min-h-[80vh]">

      <div className="top text-center text-3xl font-bold mb-8 text-blue-800">
        Services Provided
      </div>
      <div className="cards flex justify-between gap-20">
        <Card
          title="Manage Passwords"
          description="Store and manage your passwords securely."
          bgImage="/asssets/passwords-removed.png"
        />
        <Card
          title="Manage Document Here.."
          description="Upload and manage your important documents."
          bgImage="/asssets/docu-transformed.jpg"
        />
        <Card
          title="Manage Identity Cards"
          description="Store and manage your identity cards securely."
          bgImage="/asssets/idcard-transformed.jpg"
        />
      </div>
    </div>
  );
};

const Card = ({ title, description, bgImage }) => {
  return (
    <div
      className="card flex-1 bg-cover bg-center rounded-lg shadow-lg p-6 text-white transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
      style={{ 
        backgroundImage: `url(${bgImage})`,
        minHeight: '250px',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0,0.1)',
      }}
    >
      <div className="card-content">
        <h3 className="text-2xl font-bold mb-2 text-blue-300">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default User;
