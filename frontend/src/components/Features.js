import React from 'react';
import realTime from '../images/realtime.png';

function Features() {
  return (
    <div className="p-7 mt-5">
      <div>
        <div className="bg-gray-200 rounded-full w-20 px-2 text-purple-500 text-center font-semibold">
          Features
        </div>
        <h1 className="text-3xl font-bold mt-2">
          Optimize Your Inventory with Smart Features
        </h1>
        <p className="mt-3 font-light text-gray-500">
          Gain full visibility and control over your stock, orders, and suppliers with intuitive solutions designed to streamline your operations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {[...Array(6)].map((_, index) => (
          <div key={index} className={`p-6 rounded-md ${index % 2 === 0 ? 'bg-gray-300' : 'bg-amber-50'}`}>
            <h2 className="text-gray-800 font-semibold">Real-Time Stock Monitoring</h2>
            <p className="text-gray-600 font-light">
              Track inventory levels across all locations with instant updates.
            </p>
            <img src={realTime} alt="Real-time stock monitoring" className="mt-3 rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
