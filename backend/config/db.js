import mongoose from "mongoose";
import { dbUrl } from "./confiig.js";


const db  = async () => {
 try{

   const connection= await mongoose.connect(dbUrl)
   console.log(`mongodb connected seccussfully: ${connection.connection.host}`)
 }catch(err){
   console.log(`Erorr : ${err.message
   }`)
 }
   
}

export default db