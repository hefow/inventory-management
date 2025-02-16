import Product from '../modal/prodectModel.js'

export const addProduct=async(req,res)=>{
   try {
      console.log("User:", req.user);
      const {name}=req.body

      if(!name){
         res.status(403).json({message: "product is required."})
      }

      const product=await Product.create({
         ...req.body,
         user: req.user
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