import mongoose from 'mongoose'


const productSchema= mongoose.Schema({
   name:{
      type: String,
      required: [true, "add name"],
   },
   category:{
      type: String,
      required: true
   },
   manufacturer:{
      type: String,
      required:true
   },
   modelNo:{
      type: String
   },
   location:{
      type: String,
      required:true
   },
   supplier:{
      type:String,
   },
   stock:{
      type:Number,
      default:0
   }

},{timestamp:true})

const Product = mongoose.model("Product",productSchema)

export default Product