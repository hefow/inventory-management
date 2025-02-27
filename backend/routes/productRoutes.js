import express from "express"
import { addProduct, deleteProduct, getAllProducts, updateProduct } from "../controller/productController.js";
import { protect } from "../midleware/authMadleware.js";

const router =express.Router();

router.post("/add",protect,addProduct)
router.get("/" ,getAllProducts)
router.put("/:id",updateProduct)
router.delete("/:id",deleteProduct)


export default router