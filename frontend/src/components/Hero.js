import React from 'react';
import NavBar from './NavBar';

function Hero() {
  return (
    <section className="bg-purple-600 min-h-screen p-5">
      <NavBar />
      <div className='flex flex-col items-center justify-center'>
      <div className="text-center mt-10 p-5 max-w-3xl ">
        <h1 className="text-white font-extrabold text-4xl leading-tight">
          Effortless Inventory Tracking for Businesses
        </h1>
        <p className="text-white font-light mt-5 text-lg">
          Track, manage, and optimize your inventory <br /> in real-time with ease.
        </p>
        <div className="mt-5 flex justify-center gap-4">
          <button className="rounded-full outline-none px-6 py-3 text-white ring-2 ring-white hover:bg-white hover:text-purple-600 transition duration-300">
            Get Started
          </button>
          <button className="bg-white rounded-full px-6 py-3 text-purple-600 font-semibold hover:bg-gray-100 transition duration-300">
            Try for Free
          </button>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Hero;
