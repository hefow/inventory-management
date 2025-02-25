import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header className="flex justify-between items-center bg-gray-900 p-5 rounded-full shadow-md">
      <div>
        <h2 className="text-3xl text-yellow-400 font-extrabold tracking-wide">
          InvPro
        </h2>
      </div>
      <nav className="flex gap-6 text-white font-medium">
        <Link to="/" className="hover:text-yellow-400 transition duration-300">Home</Link>
        <Link to="/features" className="hover:text-yellow-400 transition duration-300">Features</Link>
        <Link to="/benefits" className="hover:text-yellow-400 transition duration-300">Benefits</Link>
        <Link to="/prices" className="hover:text-yellow-400 transition duration-300">Prices</Link>
      </nav>
      <Link to="/login" className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-yellow-500 transition duration-300">
        Get Started
      </Link>
    </header>
  );
}

export default NavBar;
