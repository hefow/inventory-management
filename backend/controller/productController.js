import Product from '../modal/prodectModel.js'

export const addProduct=async(req,res)=>{
   try {
      const {name,category,manufacturer,modelNo,location,supplier,stock}=req.body
      const existproduct=await Product.findOne({name})
      if(existproduct){
         res.status(403)
         throw new Error("This product already created")
      }

      const product=await Product.create({name,category,manufacturer,modelNo,location,supplier,stock})
      if(product){
         res.status(201).json({
            name:product.name,
            category:product.category,
            manufacturer:product.manufacturer,
            modelNo:product.modelNo,
            location:product.location,
            supplier: product.supplier,
            stock:product.stock,
            user: req.user._id
         })
      }

   } catch (error) {
      res.status(500)
      console.log("server error")
   }
}