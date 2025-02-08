import React from 'react'
import { Link } from 'react-router-dom'

function UserList() {
  return (
    <div className="m-auto">
      UserList
      <hr/>
      <div>
         <div className="flex justify-between items-center mt-4">
            <h3>users</h3>
            <div className="">
               <input className="border-2 px-1 py-1 rounded-lg mr-2" type="text" placeholder="search..."/>
               <button className="bg-purple-600 px-2 py-2 rounded-md text-white">Add 
                  <Link className="decoration-none" to="/dashboard/users/add">User</Link>
               </button>
            </div>
         </div>
      </div>
   </div>
  )
}

export default UserList