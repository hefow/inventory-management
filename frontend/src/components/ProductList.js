import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ProductList() {
  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError ]=useState("");

  const fetchUsers=async ()=>{
     try {
        const response=await axios.get("http://localhost:8080/api/products")
        console.log(response.data)
        setProducts(response.data)
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
    <div>
      <div className="flex justify-between items-center mt-4 mb-2">
         <h3 className="text-2xl font-semibold mb-2">Products</h3>
         <div className="">
            <input className="border-2 px-1 py-1 rounded-lg mr-2" type="text" placeholder="search..."/>
            <button className="bg-purple-600 px-2 py-2 rounded-md text-white">Add 
               <Link className="decoration-none" to="/dashboard/products/add">Product</Link>
            </button>
         </div>
      </div>
      <hr/>
      <table className="min-w-full bg-white border border-gray-200 shadow-md">
            <thead className="bg-gray-200">
               <tr className="text-left">
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Category</th>
                  <th className="px-4 py-2 border">manufacturer</th>
                  <th className="px-4 py-2 border">modelNo</th>
                  <th className="px-4 py-2 border">location</th>
                  <th className="px-4 py-2 border">supplier</th>
                  <th className="px-4 py-2 border">stock</th>
                  <th className="px-4 py-2 border">Action</th>
               </tr>
            </thead>
            <tbody>
               {products.map((product)=>(
                  <tr key={product.id} className="hover:bg-gray-100">
                     <td className="px-4 py-2 border">{product.name}</td>
                     <td className="px-4 py-2 border">{product.category}</td>
                     <td className="px-4 py-2 border">{product.manufacturer}</td>
                     <td className="px-4 py-2 border">{product.modelNo}</td>
                     <td className="px-4 py-2 border">{product.location}</td>
                     <td className="px-4 py-2 border">{product.supplier}</td>
                     <td className="px-4 py-2 border">{product.stock}</td>
                  </tr>
               ))}
            </tbody>
         </table>
    </div>
  )
}

export default ProductList