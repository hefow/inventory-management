import jwt from 'jsonwebtoken'
import User from '../modal/UserModal.js'
import {jwt_secret} from '../config/confiig.js'
export const protect = async (req,res,next)=>{
   const token= req.cookies.jwt;
   console.log(token)

   if(!token){ 
      return res.status(401).json({message: "Not Authorized"})
   }

   try{
      const decoded = jwt.verify(token,jwt_secret)
      req.user = await User.findById(decoded.id).select("-password")
      next();
   }catch (eror){
      return res.status(401).json({message: "token failed"})
   }
}