import mongoose from "mongoose";

const userSchema=mongoose.Schema(
   {
      name:{
         type:String,
         required:true,
      },
      email:{
         type:String,
         required:true,
         unique:true
      },
      password:{
         type:String,
         required: true,
         unique:true
      },
      dept:{
         type:String,
         enum:{
            values:["warehouse","mantainance","production","silo"]
         }
      },
      isAdmin:{
         type:Boolean,
         required:true
      },
      procurement:{
         type:Boolean,
      }

   }
)

const User=mongoose.model('User', userSchema)

export default User 