import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import db from './db/db.js';
import userRoute from './routes/userRoute.js';
import morgan from 'morgan';
import helmet from 'helmet'
const app=express()
dotenv.config();

db();
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/api/users",userRoute)

app.get("/",(req,res)=>{
   res.send("welcome to our server")
})
const port = process.env.port || 8080;

app.listen(port,()=>console.log("server is running on port 8080"))