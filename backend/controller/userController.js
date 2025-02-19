import User from "../modal/UserModal.js";
import { asyncHandler } from "../utils/asynchandler.js";
import generatorToken from "../utils/generatorToken.js";

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
//login User
export const loginUser = async(req,res)=>{
   const {email,password}=req.body;

   const user=await User.findOne({email})

   if(user && (await user.comparePassword(password))){
      const token =generatorToken(res,user._id)
      res.cookie("token", token, {
         httpOnly: true, // Prevents JavaScript access
         secure: process.env.NODE_ENV === "production", // Only in HTTPS
         sameSite: "strict",
         maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      res.json({
         name: user.name,
         email:user.email,
         isAdmin:user.isAdmin,
         procurement:user.procurement,
         dept:user.dept,
         token: token,
      })
   }else{
      res.status(401)
      throw new Error("invalid email or password")
   }
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