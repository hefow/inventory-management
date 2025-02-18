import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function ProductForm() {
   const { register, handleSubmit, reset, formState: { errors } } = useForm();

  // const onSubmit = async(data) => {
  //   try {
  //     console.log("Form Data:", data);
  //     const response = await axios.post("http://localhost:8080/api/products/add",data)
  //     console.log(response)
  //     toast.success(" New Product registered.");
  //     reset(); // Reset the form after submission
  //   } catch (error) {
  //     console.error("Error:", error);
  //     toast.error("Registration failed. Please try again.");
  //   }
  // };
  const onSubmit = async (data) => {
    try {
        const token = localStorage.getItem("token");

        const response = await axios.post(
            "http://localhost:8080/api/products/add",
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        console.log(response);
        toast.success("New Product registered.");
    } catch (error) {
        console.error("Error:", error);
        toast.error("Registration failed. Please try again.");
    }
};

  return (
   <div className='w-full '>
   <h2 className="text-xl font-bold mb-4">Add new Product</h2>
   <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 bg-white p-6 shadow-md rounded-md space-y-5 gap-5">

     {/* Name Field */}
     <div className="flex flex-col mb-2">
       <label htmlFor="name">Name</label>
       <input 
         className='border-2  outline-none px-2 py-2 rounded-md' 
         type="text"  
         id="name" 
         {...register('name', { required: true })}
       />
       {errors.name && <p className='text-red-600'>Name is required</p>}
     </div>

     <div className="flex flex-col mb-2">
          <label htmlFor="dept">category</label>
          <select 
            className='border-2 outline-none px-2 py-2 mt-2 rounded-md' 
            id="dept" 
            {...register('category', { required: true })}
          >
            <option value="">Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="clothes">Clothes</option>
            <option value="food">Food</option>
            <option value="manufacture">Manufacture</option>
          </select>
          {errors.dept && <p className='text-red-600'>Please select a category</p>}
        </div>

     <div className="flex flex-col mb-2">
       <label htmlFor="name">Manufacturer</label>
       <input 
         className='border-2  outline-none px-2 py-2 rounded-md' 
         type="text"  
         id="manufacturer" 
         {...register('manufacturer', { required: true })}
       />
       {errors.name && <p className='text-red-600'>manufacturer is required</p>}
     </div>

     <div className="flex flex-col mb-2">
       <label htmlFor="name">modelNo</label>
       <input 
         className='border-2  outline-none px-2 py-2 rounded-md' 
         type="text"  
         id="modelNo" 
         {...register('modelNo', { required: true })}
       />
       {errors.name && <p className='text-red-600'>modelNo is required</p>}
     </div>

     <div className="flex flex-col mb-2">
       <label htmlFor="name">location</label>
       <input 
         className='border-2  outline-none px-2 py-2 rounded-md' 
         type="text"  
         id="location" 
         {...register('location', { required: true })}
       />
       {errors.name && <p className='text-red-600'>location is required</p>}
     </div>

     <div className="flex flex-col mb-2">
       <label htmlFor="name">supplier</label>
       <input 
         className='border-2  outline-none px-2 py-2 rounded-md' 
         type="text"  
         id="supplier" 
         {...register('supplier', { required: true })}
       />
       {errors.name && <p className='text-red-600'>supplier is required</p>}
     </div>

     <div className="flex flex-col mb-2">
       <label htmlFor="stock">stock</label>
       <input 
         className='border-2  outline-none px-2 py-2 rounded-md' 
         type="text"  
         id="stock" 
         {...register('stock', { required: true })}
       />
       {errors.name && <p className='text-red-600'>stock is required</p>}
     </div>

     {/* Submit Button */}
     <button 
       type="submit"
       className='bg-purple-500 px-4 py-2 w-full mt-2 text-white font-semibold rounded-md hover:bg-purple-600 col-span-2'
     >
       <Link to="/dashboard/users" >Register</Link>
     </button>
   </form>
 </div>
  )
}

export default ProductForm