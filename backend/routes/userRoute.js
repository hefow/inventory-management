import express from "express"
import { getAllUsers, loginUser, registerUser } from "../controller/userController.js";

const router =express.Router();

router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/",getAllUsers)



export default router