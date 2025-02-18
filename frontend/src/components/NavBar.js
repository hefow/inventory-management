import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <header className="flex justify-between align-middle m-auto p-5">
      <div>
         <h2 className="text-2xl text-yellow-400 font-bold">
            InvPro</h2>
      </div>
      <nav className="flex gap-5 text-white">
         <a href="#">Home</a>
         <a href="#">Features</a>
         <a href="#">Benefits</a>
         <a href="#">Prices</a>
      </nav>
      <button className="bg-white rounded-full px-2">
         <Link to='/login'>Get Started</Link>
      </button>
    </header>
  )
}

export default NavBar