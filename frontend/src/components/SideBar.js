import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <aside className="bg-purple-600 h-screen p-4 text-white">
      <h1 className="text-2xl">Dashboard</h1>
     <div className="mt-5 font-light"> 
     <div className="flex">
         <svg  width="24" height="20" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d='M6.133 21C4.955 21 4 20.02 4 18.81v-8.802c0-.665.295-1.295.8-1.71l5.867-4.818a2.09 2.09 0 0 1 2.666 0l5.866 4.818c.506.415.801 1.045.801 1.71v8.802c0 1.21-.955 2.19-2.133 2.19z'/><path d='M9.5 21v-5.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V21'/></svg>
         <Link to="dashboard" className="ml-2">Home</Link>
      </div>
      <div className="flex mt-1">
          <svg width="24" height="20" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d='M8 6.5h12M8 12h12M8 17.5h12M4 6.5h1M4 12h1m-1 5.5h1'/></svg>
         <a className="ml-2">Products</a>
      </div>
      <div className="flex mt-1">
          <svg width="24" height="20" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d='M8 6.5h12M8 12h12M8 17.5h12M4 6.5h1M4 12h1m-1 5.5h1'/></svg>
         <a className="ml-2">Products</a>
      </div>
      <div className="flex">
         <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d='M15 7.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m4.5 13c-.475-9.333-14.525-9.333-15 0'/></svg>
         <Link to="/dashboard/users" className="ml-2">Users</Link>
      </div>
     </div>
     <div className="mt-40">
       <div className="flex">
          <svg width="24" height="20" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d='M13.496 21H6.5c-1.105 0-2-1.151-2-2.571V5.57c0-1.419.895-2.57 2-2.57h7M16 15.5l3.5-3.5L16 8.5m-6.5 3.496h10'/></svg>
         <a className="font-light size-10">Logout</a>
       </div>
     </div>
    </aside>
  )
}

export default SideBar