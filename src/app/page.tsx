import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Hello! from SnackAI!</h1>
        <p className="text-lg mb-6">Welcome to our amazing application.</p>
        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomePage;
