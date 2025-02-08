import express, { urlencoded } from 'express'
import db from './config/db.js';
import userRoute from './routes/userRoute.js';
import morgan from 'morgan';
import helmet from 'helmet'
import cors from 'cors'
import { nodeEnv, PORT } from './config/confiig.js';
const app=express()

db();
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(helmet())
app.use(cors())

if(nodeEnv !== "production"){
   app.use(morgan())
}
app.use("/api/users",userRoute)

app.get("/",(req,res)=>{
   res.send("welcome to our server")
})
const port = PORT || 8080;

app.listen(port,()=>console.log("server is running on port 8080"))