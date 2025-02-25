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
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d='m12 21 8.131-4.208c.316-.164.474-.245.589-.366a1 1 0 0 0 .226-.373c.054-.159.054-.336.054-.692V7.533M12 21l-8.131-4.208c-.316-.164-.474-.245-.589-.366a1 1 0 0 1-.226-.373C3 15.894 3 15.716 3 15.359V7.533M12 21v-9.063m9-4.404-9 4.404m9-4.404-4.5-2.33M3 7.534l8.269-4.28c.268-.138.401-.208.542-.235a1 1 0 0 1 .378 0c.14.027.274.097.541.235l3.77 1.95M3 7.534l4.5 2.202m4.5 2.202L7.5 9.735m0 0 9-4.531m-9 4.531v2.202'/></svg>
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
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d='M21 19.75c0-2.09-1.67-5.068-4-5.727m-2 5.727c0-2.651-2.686-6-6-6s-6 3.349-6 6m9-12.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m3 3a3 3 0 1 0 0-6'/></svg>
          <span>Users</span>
        </NavLink>
      </nav>
    </aside>
  );
}

export default SideBar;
