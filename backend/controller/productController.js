import Product from '../modal/prodectModel.js'

export const addProduct=async(req,res)=>{
   try {
      console.log("User:", req.user._id);
      const currentUser=req.user;
      const {name}=req.body
      const regProduct=await Product.findOne({name})

      if(regProduct){
         return res.status(403).json({message:"This product already registered"})
      }

      if(!name){
         res.status(403).json({message: "product is required."})
      }

      const product=await Product.create({
         ...req.body,
         user: currentUser
      })
      if(product){
         res.status(201).json(product)
      }

   } catch (error) {
      res.status(500).json({
         message: error.message
      })
   }
}

//get all products

export const getAllProducts=async(req,res)=>{
   try {
      const products =await Product.find()
      if(!products){
         res.status(404).json({message: "There is no product here."})
      }
      res.status(200).json(products)
   } catch (error) {
      res.status(500).json({message: error.message})
   }
}

export const updateProduct =async(req,res)=>{
   try {
      const {id}=req.params;

      const {name,category,manufacturer,modelNo,location,supplier,stock}=req.body;

      const productUpdated=await Product.findByIdAndUpdate(id,{name,category,manufacturer,modelNo,location,supplier,stock},{new:true})

      if(!productUpdated){
         return res.status(404).json({message:"producted not found"})
      }

      res.status(200).json({message:"product updated",productUpdated})
   } catch (error) {
      res.status(500).json({message:"server error",error:error.message})
   }
} 

//delete prodyct

export const deleteProduct=async(req,res)=>{
   try {
      const {id}=req.params;

      const product=await Product.findByIdAndDelete(id)

      if(!product){
         return res.status(404).json({message:"product not found"})
      }

      res.status(200).json({message:"product deleted"})
      
   } catch (error) {
      res.status(500).json({message: "server error",error:error.message})
   }
}

