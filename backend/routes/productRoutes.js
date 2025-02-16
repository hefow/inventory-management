import express from "express"
import { addProduct, getAllProducts } from "../controller/productController.js";
import { protect } from "../midleware/authMadleware.js";

const router =express.Router();

router.post("/add",protect,addProduct)
router.get("/" ,getAllProducts)


export default router