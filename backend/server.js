import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import db from './db/db.js';
import userRoute from './routes/userRoute.js';
const app=express()
dotenv.config();

db();
app.use(express.urlencoded({extended:true}))
app.use(express.json)

app.use("/api/users",userRoute)

app.get("/",(req,res)=>{
   res.send("welcome to our server")
})

app.listen(3000,console.log("server is running"))