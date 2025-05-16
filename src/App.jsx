import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col items-center justify-center px-4">
      <header className="w-full max-w-2xl flex flex-col items-center py-8">
        <img
          src="https://wewantwaste.co.uk/static/media/logo.2e6e2d2d.svg"
          alt="We Want Waste Logo"
          className="h-16 mb-6"
        />
        <h1 className="text-3xl md:text-5xl font-bold text-green-700 mb-4 text-center">
          Book Your Skip Online
        </h1>
        <p className="text-lg md:text-xl text-gray-700 text-center mb-8">
          Fast, affordable, and eco-friendly skip hire for your waste needs.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow transition">
          Get Started
        </button>
      </header>
    </div>
  );
}

export default App;
