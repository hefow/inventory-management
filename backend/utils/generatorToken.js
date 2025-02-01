import jwt from 'jsonwebtoken'
import { jwt_secret, nodeEnv } from '../config/confiig.js'

export const generatorToken = (res, userId)=>{
   const expiresIn =5 * 24 *60 * 60
   const token = jwt.sign({userId},jwt_secret,{expiresIn})
   
   res.cookie("token",token,{
      httpOnly: true,
      secure: nodeEnv !== "production",
      maxAge: 5 * 24*60*60*1000
   })

   return token
}

export default generatorToken