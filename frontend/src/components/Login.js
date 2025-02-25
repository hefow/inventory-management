import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

function Login() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate(); 

  const {login,user}=useUser()
  console.log('stored user:',user)
  useEffect(()=>{
    if(user) navigate('/dashboard')
  },[user])

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8080/api/users/login", data,{withCredentials: true});
      console.log(response);
      toast.success("Login successful.");
      reset();
      console.log(response.data.expiresIn)
      login(response.data,response.data.expiresIn)
      setTimeout(() => navigate("/dashboard"), 1500); // Redirect after 1.5s
    } catch (error) {
      console.error("Error:", error);
      toast.error("Login failed. Check your credentials.");
    }
  };

// const onSubmit = async (data) => {
//     try {
//       console.log("Form Data:", data);
//       const response = await axios.post("http://localhost:8080/api/users/login", data);
//       console.log(response.data)
//       const { user, token, expiresIn } = response.data; // Expecting these from backend

//       console.log(login(user, token, expiresIn)); // Store user session in context

//       toast.success("Login successful.");
//       reset();
//       setTimeout(() => navigate("/dashboard"), 1500);
//     } catch (error) {
//       console.error("Error:", error);
//       toast.error("Login failed. Check your credentials.");
//     }
// };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          
          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-600 font-semibold mb-1">Email</label>
            <input
              className="border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
              type="email"
              id="email"
              {...register("email", { required: "Email is required", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-600 font-semibold mb-1">Password</label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
              {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters long" } })}
            />
            {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-purple-500 px-4 py-2 w-full text-white font-semibold rounded-md hover:bg-purple-600 transition"
          >
            Login
          </button>
        </form>
        
        {/* Register Link */}
        {/* <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account? <a href="/dashboard/users/add" className="text-purple-500 font-semibold hover:underline">Sign Up</a>
        </p> */}
      </div>
    </div>
  );
}

export default Login;
