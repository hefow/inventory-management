


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function UserList() {
   const [users, setUsers] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState("");
   const [editingUser, setEditingUser] = useState(null); // Track the user being edited

   const fetchUsers = async () => {
      try {
         const response = await axios.get("http://localhost:8080/api/users");
         setUsers(response.data);
         setLoading(false);
      } catch (error) {
         setError("Failed to fetch data");
         setLoading(false);
      }
   };

   useEffect(() => {
      fetchUsers();
   }, []);

   const handleDelete = async (id) => {
      if (window.confirm("Are you sure you want to delete this user?")) {
         try {
            await axios.delete(`http://localhost:8080/api/users/${id}`);
            setUsers(users.filter(user => user._id !== id));
         } catch (error) {
            alert("Error deleting user");
         }
      }
   };

   return (
      <div className="overflow-x-auto p-6">
         <hr />
         <div>
            <div className="flex justify-between items-center mt-4">
               <h3 className="text-2xl font-semibold mb-2">Users</h3>
               <div>
                  <input className="border-2 px-1 py-1 rounded-lg mr-2" type="text" placeholder="Search..." />
                  <button className="bg-purple-600 px-4 py-2 rounded-md text-white">
                     <Link className="decoration-none" to="/dashboard/users/add">Add User</Link>
                  </button>
               </div>
            </div>
            {loading ? (
               <p>Loading users...</p>
            ) : error ? (
               <p className="text-red-500">{error}</p>
            ) : (
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
                     {users.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-100">
                           <td className="px-4 py-2 border">{user.name}</td>
                           <td className="px-4 py-2 border">{user.email}</td>
                           <td className="px-4 py-2 border">{user.dept}</td>
                           <td className="px-4 py-2 border">{user.isAdmin ? "Admin" : "User"}</td>
                           <td className="px-4 py-2 border flex space-x-2">
                              <button
                                 className="bg-blue-500 text-white px-3 py-1 rounded"
                                 onClick={() => setEditingUser(user)} // Open edit form
                              >
                                 Edit
                              </button>
                              <button
                                 className="bg-red-500 text-white px-3 py-1 rounded"
                                 onClick={() => handleDelete(user._id)}
                              >
                                 Delete
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            )}
         </div>

         {/* Show EditForm if a user is being edited */}
         {editingUser && <EditForm user={editingUser} setUsers={setUsers} setEditingUser={setEditingUser} />}
      </div>
   );
}

function EditForm({ user, setUsers, setEditingUser }) {
   const [formData, setFormData] = useState({
      name: user.name,
      email: user.email,
      dept: user.dept,
      isAdmin: user.isAdmin
   });

   const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
         ...formData,
         [name]: type === "checkbox" ? checked : value
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const response = await axios.put(`http://localhost:8080/api/users/${user._id}`, formData);
         setUsers(prevUsers =>
            prevUsers.map(u => (u.id === user._id ? response.data : u))
         );
         setEditingUser(null); // Close edit form
      } catch (error) {
         alert("Error updating user");
      }
   };

   return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
         <div className="bg-white p-6 rounded-md shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Edit User</h3>
            <form onSubmit={handleSubmit}>
               <div className="mb-2">
                  <label className="block">Name:</label>
                  <input
                     type="text"
                     name="name"
                     value={formData.name}
                     onChange={handleChange}
                     className="border p-2 w-full"
                  />
               </div>
               <div className="mb-2">
                  <label className="block">Email:</label>
                  <input
                     type="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     className="border p-2 w-full"
                  />
               </div>
               <div className="mb-2">
                  <label className="block">Department:</label>
                  <input
                     type="text"
                     name="dept"
                     value={formData.dept}
                     onChange={handleChange}
                     className="border p-2 w-full"
                  />
               </div>
               <div className="mb-2">
                  <label className="flex items-center">
                     <input
                        type="checkbox"
                        name="isAdmin"
                        checked={formData.isAdmin}
                        onChange={handleChange}
                        className="mr-2"
                     />
                     Admin
                  </label>
               </div>
               <div className="flex justify-between">
                  <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
                  <button type="button" onClick={() => setEditingUser(null)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
               </div>
            </form>
         </div>
      </div>
   );
}

export default UserList;
