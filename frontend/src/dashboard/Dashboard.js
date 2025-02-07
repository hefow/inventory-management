import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Overview from '../components/Overview'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="flex">
      <SideBar/>
      <div className="flex-1 flex flex-col">
        <Header/>
        <div className="mt-4 p-6">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard