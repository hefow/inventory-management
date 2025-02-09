import React from 'react'
import { Link } from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from 'axios';

function UserList() {
   const [users,setUsers]=useState([]);
   const [loading,setLoading]=useState(true);
   const [error,setError ]=useState("");

   const fetchUsers=async ()=>{
      try {
         const response=await axios.get("http://localhost:8080/api/users")
         console.log(response.data)
         setUsers(response.data)
         setLoading(false)
      } catch (error) {
         setError("Failed to fetch a data")
         setLoading(false)
      }
   }
   useEffect(()=>{
      fetchUsers();
   },[]) 
  return (
    <div className="overflow-x-auto p-6">
      <hr/>
      <div>
         <div className="flex justify-between items-center mt-4">
            <h3 className="text-2xl font-semibold mb-2">users</h3>
            <div className="">
               <input className="border-2 px-1 py-1 rounded-lg mr-2" type="text" placeholder="search..."/>
               <button className="bg-purple-600 px-2 py-2 rounded-md text-white">Add 
                  <Link className="decoration-none" to="/dashboard/users/add">User</Link>
               </button>
            </div>
         </div>
         <table className="min-w-full bg-white border border-gray-200 shadow-md">
            <thead className="bg-gray-200">
               <tr className="text-left">
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Email</th>
                  <th className="px-4 py-2 border">Department</th>
                  <th className="px-4 py-2 border">Role</th>
                  <th className="px-4 py-2 border">Action</th>
               </tr>
            </thead>
            <tbody>
               {users.map((user)=>(
                  <tr key={user.id} className="hover:bg-gray-100">
                     <td className="px-4 py-2 border">{user.name}</td>
                     <td className="px-4 py-2 border">{user.email}</td>
                     <td className="px-4 py-2 border">{user.dept}</td>
                     <td className="px-4 py-2 border">{user.isAdmin?(<span>admin</span>):(<span>user</span>)}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   </div>
  )
}

export default UserList