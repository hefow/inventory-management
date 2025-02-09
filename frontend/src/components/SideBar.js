import React from "react";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <aside className="bg-purple-600 h-screen w-40 p-4 text-white fixed">
      {/* DASHBOARD TITLE */}
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* NAVIGATION MENU */}
      <nav className="mt-6 space-y-4">
        {/* Home Link */}
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center space-x-3 p-2 rounded-md transition ${
              isActive ? "bg-purple-700" : "hover:bg-purple-500"
            }`
          }
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M6.133 21C4.955 21 4 20.02 4 18.81v-8.802c0-.665.295-1.295.8-1.71l5.867-4.818a2.09 2.09 0 0 1 2.666 0l5.866 4.818c.506.415.801 1.045.801 1.71v8.802c0 1.21-.955 2.19-2.133 2.19z"/>
            <path d="M9.5 21v-5.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V21"/>
          </svg>
          <span>Home</span>
        </NavLink>

        {/* Products Link */}
        <NavLink
          to="/dashboard/products"
          className={({ isActive }) =>
            `flex items-center space-x-3 p-2 rounded-md transition ${
              isActive ? "bg-purple-700" : "hover:bg-purple-500"
            }`
          }
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M8 6.5h12M8 12h12M8 17.5h12M4 6.5h1M4 12h1m-1 5.5h1"/>
          </svg>
          <span>Products</span>
        </NavLink>

        {/* Users Link */}
        <NavLink
          to="/dashboard/users"
          className={({ isActive }) =>
            `flex items-center space-x-3 p-2 rounded-md transition ${
              isActive ? "bg-purple-700" : "hover:bg-purple-500"
            }`
          }
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M15 7.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m4.5 13c-.475-9.333-14.525-9.333-15 0"/>
          </svg>
          <span>Users</span>
        </NavLink>
      </nav>
    </aside>
  );
}

export default SideBar;
