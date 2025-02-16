import mongoose from 'mongoose'


const productSchema= mongoose.Schema({
   user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
   },
   name:{
      type: String,
      required: [true, "Product name is required"],
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

},{timestamps:true})

const Product = mongoose.model("Product",productSchema)

export default Product