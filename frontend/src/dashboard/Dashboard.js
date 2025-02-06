import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

function Dashboard() {
  return (
    <div>
      <Header/>
      <div className="w-52">
        <SideBar/>
      </div>
    </div>
  )
}

export default Dashboard