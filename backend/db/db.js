import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
const db  = async () => {
 try{

   const connection= await mongoose.connect(process.env.MONGO_URI)
   console.log(`mongodb connected seccussfully: ${connection.connection.host}`)
 }catch(err){
   console.log(`Erorr : ${err.message
   }`)
 }
   
}

export default db