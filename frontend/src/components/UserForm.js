import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function UserForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async(data) => {
    console.log("Form Data:", data);
    const response = await axios.post("http://localhost:8080/api/users/register",data)
    console.log(response)
    toast.success("User registered successfully.");
    reset(); // Reset the form after submission
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 shadow-md rounded-md">
        <h2 className="text-xl font-bold mb-4">Register Form</h2>

        {/* Name Field */}
        <div className="mb-2">
          <label htmlFor="name">Name</label>
          <input 
            className='border-2 ml-2 outline-none px-2 py-2' 
            type="text"  
            id="name" 
            {...register('name', { required: true })}
          />
          {errors.name && <p className='text-red-600'>Name is required</p>}
        </div>

        {/* Email Field */}
        <div className="mb-2">
          <label htmlFor="email">Email</label>
          <input 
            className='border-2 ml-2 outline-none px-2 py-2 mt-2' 
            type="email"  
            id="email" 
            {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
          />
          {errors.email && <p className='text-red-600'>Invalid email format</p>}
        </div>

        {/* Department Selection */}
        <div className="mb-2">
          <label htmlFor="dept">Department</label>
          <select 
            className='border-2 ml-2 outline-none px-2 py-2 mt-2' 
            id="dept" 
            {...register('dept', { required: true })}
          >
            <option value="">Select a department</option>
            <option value="warehouse">Warehouse</option>
            <option value="mantainance">Maintenance</option>
            <option value="production">Production</option>
            <option value="silo">Silo</option>
          </select>
          {errors.dept && <p className='text-red-600'>Please select a department</p>}
        </div>

        {/* Is Admin Checkbox */}
        <div className="mb-2">
          <label htmlFor="isAdmin" className="mr-2">Is Admin</label>
          <input 
            type="checkbox" 
            id="isAdmin" 
            className="ml-2" 
            {...register('isAdmin')}
          />
        </div>

        {/* Procurement Checkbox */}
        <div className="mb-2">
          <label htmlFor="procurement" className="mr-2">Procurement</label>
          <input 
            type="checkbox" 
            id="procurement" 
            className="ml-2" 
            {...register('procurement')}
          />
        </div>

        {/* Password Field */}
        <div className="mb-2">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            className='border-2 ml-2 outline-none px-2 py-2 mt-2' 
            {...register('password', { required: true, minLength: 6 })}
          />
          {errors.password && <p className='text-red-600'>Password must be at least 6 characters long</p>}
        </div>

        {/* Submit Button */}
        <button 
          type="submit"
          className='bg-green-500 px-4 py-2 w-full mt-2 text-white font-semibold rounded-md hover:bg-green-600'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserForm;
