import { jwt_secret } from "../config/confiig.js";
import jwt from 'jsonwebtoken'
import User from "../modal/UserModal.js";
import { asyncHandler } from "../utils/asynchandler.js";

export const registerUser=asyncHandler(async(req,res)=>{
   const {name,email,password,dept,isAdmin,procurement}=req.body

   const existUser=await User.findOne({email})
   if(existUser){
      res.status(403)
      throw new Error("This user is already exist")
   }

   const user =await User.create({name,email,password,dept,isAdmin,procurement})
   if(user){
      res.status(201).json({
         _id:user.id,
         name:user.name,
         email:user.email,
         password:user.password,
         dept:user.dept,
         procurement:user.procurement,
         isAdmin:user.isAdmin
      })
   }else{
      res.status(401)
      console.log("invalid data")
   }
})

export const loginUser =async (req,res)=>{
   const {email,password}=req.body

   const user=await User.findOne({email})
   if (!user) {
    return res.status(401).json({ message: "Invalid email" });
  }
   const isMatch=await user.comparePassword(password)
   if(!isMatch){
    return res.status(401).json({
      message:"invalid password"
    })
  }
  // token generation
  const expiresIn= 30 *24*60*60 //30 days

  const token = jwt.sign({_id:user._id},jwt_secret,{ expiresIn})

  res.cookie('token',token,{httpOnly:true,secure:false,sameSite: "Strict",maxAge:expiresIn* 1000})

  user.password=undefined

   res.status(200).send({...user.toJSON(),expiresIn})
}

//get User 
export const getAllUsers=async(req,res)=>{
   try {
      const users =await User.find();
      res.status(200).json(users)
   } catch (error) {
      console.log(error.message)
   }
}

// update user
export const updateUser =async(req,res)=>{
   try {
      const {userId}=req.params;
      console.log(userId)
      const {name,dept,}=req.body;

      const userUpdated=await User.findByIdAndUpdate(userId,{name,dept},{new:true})
      if(!userUpdated){
         return res.status(404).json({message:"user not found"})
      }

      res.status(200).json({message:"user updated",userUpdated})
   } catch (error) {
      res.status(500).json({message:"server error",error:error.message})
   }
} 


//delete user

export const deleteUser=async(req,res)=>{
   try {
      const {id}=req.params;
      console.log(id)
      const user=await User.findByIdAndDelete(id)
      if(!user){
         return res.status(404).json({message:"user not found"})
      }
      res.status(200).json({message:"user deleted"})
   } catch (error) {
      res.status(500).json({message: "server error",error:error.message})
   }
}