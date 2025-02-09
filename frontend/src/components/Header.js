import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../images/user.png';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="w-full bg-white shadow-md p-3">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        
        {/* LOGO */}
        <div>
          <h2 className="text-2xl text-yellow-400 font-bold">InvPro</h2>
        </div>

        {/* SEARCH BAR */}
        <div className="relative">
          <input
            className="border-2 border-gray-300 rounded-full px-4 py-2 pl-10 focus:border-yellow-400 outline-none transition duration-200 w-72"
            type="text"
            placeholder="Search..."
          />
          <svg
            className="absolute left-3 top-2.5 text-gray-500"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 21l-4.35-4.35"></path>
            <circle cx="10" cy="10" r="7"></circle>
          </svg>
        </div>

        {/* ICONS & USER MENU */}
        <div className="flex items-center space-x-6">
          
          {/* NOTIFICATION ICON */}
          <div className="relative cursor-pointer">
            {/* <svg
              className="text-gray-600 hover:text-yellow-400 transition"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
               
              <path d="M15 7.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m4.5 13c-.475-9.333-14.525-9.333-15 0" />
            </svg> */}
             <svg className="text-gray-600 hover:text-yellow-400 transition" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d='M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4'/><path d='M15.019 17h-6.04m6.04 0h3.614c1.876 0 1.559-1.86.61-2.804C15.825 10.801 20.68 3 11.999 3s-3.825 7.8-7.243 11.196c-.913.908-1.302 2.804.61 2.804H8.98m6.039 0c0 1.925-.648 4-3.02 4s-3.02-2.075-3.02-4'/></svg>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">3</span>
          </div>

          {/* USER AVATAR */}
          <div className="relative">
            <img
              src={userIcon}
              alt="User Profile"
              className="w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />

            {/* DROPDOWN MENU */}
            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                  Profile
                </Link>
                <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100">
                  Settings
                </Link>
                <hr />
                <button className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
