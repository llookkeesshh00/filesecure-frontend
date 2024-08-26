import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const User = () => {
  const params = useParams();
  const { useremail, username } = useParams();


  return (
    <div className="main max-w-[75vw] mx-auto mt-10 text-white min-h-screen overflow-y-auto">

      <div className="top  text-3xl font-bold mb-8 text-blue-950">
        Services provided
      </div>
      <div className="cards flex justify-between gap-20">
        <Card title="Manage Passwords" description="Store and manage your passwords securely." bgImage="/asssets/passwords-removed.png" navigateTo={`/user/${useremail}/${username}/password`} />
        <Card title="Manage Document Here.." description="Upload and manage your important documents." bgImage="/asssets/docu-transformed.jpg" navigateTo={`/user/${useremail}/${username}/document`} />
        <Card title="Manage Identity Cards" description="Store and manage your identity cards securely." bgImage="/asssets/idcard-transformed.jpg" navigateTo={`/user/${useremail}/${username}/identity`} />
      </div>
    </div>
  );
};

const Card = ({ title, description, bgImage, navigateTo }) => {
  const naviagte = useNavigate();
  const handleClick = () => {
    naviagte(navigateTo);
  };

  return (

    <div
      className="card flex-1 bg-cover bg-center rounded-lg shadow-lg p-6 text-white transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
      style={{
        backgroundImage: `url(${bgImage})`,
        minHeight: '250px',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0,0.1)',
      }}
      onClick={handleClick}
    >
      <div className="card-content">
        <h3 className="text-2xl font-bold mb-2 text-blue-300">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default User;
