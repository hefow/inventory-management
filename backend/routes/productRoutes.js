import express from "express"
import { addProduct } from "../controller/productController.js";
import { protect } from "../midleware/authMadleware.js";

const router =express.Router();

router.post("/add",protect,addProduct)


export default router