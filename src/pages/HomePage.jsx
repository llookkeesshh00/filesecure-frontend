import React from 'react'

const HomePage = () => {
  return (
    <div className="homepage container mx-auto p-4">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold text-pink-600">Welcome to FileSecure</h1>
        <p className="text-lg text-gray-700 mt-4">
          Your trusted platform for securely storing and accessing your important documents anytime, anywhere.
        </p>
      </header>

      <section className="features my-12">
        <div className="feature-item my-6">
          <h2 className="text-2xl font-semibold text-pink-500">Secure Storage</h2>
          <p className="text-gray-600 mt-2">
            Store your documents in a highly secure environment. Your data is encrypted and protected from unauthorized access.
          </p>
        </div>

        <div className="feature-item my-6">
          <h2 className="text-2xl font-semibold text-pink-500">Easy Access</h2>
          <p className="text-gray-600 mt-2">
            Access your documents from any device with just a few clicks. No more searching through stacks of paper!
          </p>
        </div>

        <div className="feature-item my-6">
          <h2 className="text-2xl font-semibold text-pink-500">Share with Confidence</h2>
          <p className="text-gray-600 mt-2">
            Easily share your documents with others. You control who has access, and all document transfers are encrypted.
          </p>
        </div>
      </section>

      <section className="cta my-12 text-center">
        <h2 className="text-3xl font-bold text-pink-600">Get Started Today</h2>
        <p className="text-lg text-gray-700 mt-4">
          Sign up now to begin securely storing and managing your documents with FileSecure.
        </p>
        
      </section>
    </div>
  )
}

export default HomePage
