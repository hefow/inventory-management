import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex h-screen">
      {/* FIXED SIDEBAR */}
      <div className="w-64 fixed h-full">
        <SideBar />
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col ml-40 overflow-auto">
        <Header />
        
        {/* PAGE CONTENT */}
        <div className="p-6 flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
