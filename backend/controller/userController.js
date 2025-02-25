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
//login User
// export const loginUser = async(req,res)=>{
//    const {email,password}=req.body;

//    const user=await User.findOne({email})

//    if(user && (await user.comparePassword(password))){
//       const expiresIn= 30 *24*60*60 //30 days
//       const token =generatorToken(res,user._id,expiresIn)
//       res.cookie("token", token, {
//          httpOnly: true, // Prevents JavaScript access
//          secure: process.env.NODE_ENV === "production", // Only in HTTPS
//          sameSite: "strict",
//          maxAge: expiresIn* 1000, // 7 days
//       });

//       res.json({...user.toJSON(),token,expiresIn})
//    }else{
//       res.status(401)
//       throw new Error("invalid email or password")
//    }
// }

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
      const userId=req.param;
      const {name,isAdmin,dept,email,password,procurement}=req.body;

      const user=await User.findOne({userId})
      if(!user){
         return res.status(404).json({message:"user not found"})
      }

      user.name=name || user.name,
      user.dept=dept || user.dept,
      user.isAdmin= isAdmin || user.isAdmin,
      user.email=email || user.email,
      user.password || user.password,
      user.procurement=procurement || user.procurement


      const updatedUser=await user.save();

      res.status(200).json({updatedUser})
   } catch (error) {
      res.status(500).json({message:"server error",error:error.message})
   }
} 

//delete user

export const deleteUser=async(req,res)=>{
   try {
      const {id}=req.param;
      console.log(id)
      const user=await User.findByIdAndDelete({id})
      if(!user){
         return res.status(404).json({message:"user not found"})
      }
      res.status(200).json({message:"user deleted"})
   } catch (error) {
      res.status(500).json({message: "server error",error:error.message})
   }
}