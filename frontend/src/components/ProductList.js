import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

function ProductList() {
  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError ]=useState("");
  const [editingProduct,setEditingProduct]=useState(null)

  
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

  const handleDelete = async (id) => {
   if (window.confirm("Are you sure you want to delete this product?")) {
      try {
         await axios.delete(`http://localhost:8080/api/products/${id}`);
         setProducts(products.filter(product => product._id !== id));
      } catch (error) {
         toast.error("error deleting a product")
      }
   }
};
  return (
    <div>
      <div className="flex justify-between items-center mt-4 mb-2">
         <h3 className="text-2xl font-semibold mb-2">Products</h3>
         <div className="">
            <input className="border-2 px-1 py-1 rounded-lg mr-2" type="text" placeholder="search..."/>
            <button className="bg-purple-600 px-2 py-2 rounded-md text-white">
               <Link className="decoration-none" to="/dashboard/products/add">Add Product</Link>
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
                     <td className="px-4 py-2 border flex space-x-2">
                        <button
                           className="bg-blue-500 text-white px-3 py-1 rounded"
                           onClick={() => setEditingProduct(product)} // Open edit form
                        >
                           Edit
                        </button>
                        <button
                           className="bg-red-500 text-white px-3 py-1 rounded"
                           onClick={() => handleDelete(product._id)}
                        >
                           Delete
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
          {/* Show EditForm if a user is being edited */}
          {editingProduct && <EditForm product={editingProduct} setProducts={setProducts} setEditingProduct={setEditingProduct} />}
    </div>
  )
}

function EditForm({ product, setProducts, setEditingProduct }) {
   const [formData, setFormData] = useState({
      name: product.name,
      stock: product.stock,
      category: product.category,
      modelNo: product.modelNo,
      location: product.location,
      supplier: product.supplier,
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
         const response = await axios.put(`http://localhost:8080/api/products/${product._id}`, formData);
         setProducts(prevProducts =>
            prevProducts.map(p => (p.id === product._id ? response.data : p))
         );
         setEditingProduct(null); // Close edit form
      } catch (error) {
         toast.error("Error updating product")
      }
   };

   return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
         <div className="bg-white p-6 rounded-md shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Edit product</h3>
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
                  <label className="block">Stock:</label>
                  <input
                     type="text"
                     name="stock"
                     value={formData.stock}
                     onChange={handleChange}
                     className="border p-2 w-full"
                  />
               </div>
               <div className="mb-2">
                  <label className="block">supplier:</label>
                  <input
                     type="text"
                     name="supplier"
                     value={formData.supplier}
                     onChange={handleChange}
                     className="border p-2 w-full"
                  />
               </div>
               <div className="mb-2">
                  <label className="block">modelNo:</label>
                  <input
                     type="text"
                     name="modelNo"
                     value={formData.modelNo}
                     onChange={handleChange}
                     className="border p-2 w-full"
                  />
               </div>
               <div className="mb-2">
                  <label className="block">location:</label>
                  <input
                     type="text"
                     name="location"
                     value={formData.location}
                     onChange={handleChange}
                     className="border p-2 w-full"
                  />
               </div>
               <div className="flex justify-between">
                  <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
                  <button type="button" onClick={() => setEditingProduct(null)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
               </div>
            </form>
         </div>
      </div>
   );
}

export default ProductList
