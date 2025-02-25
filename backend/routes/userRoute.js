import express from "express"
import { deleteUser, getAllUsers, loginUser, registerUser, updateUser } from "../controller/userController.js";

const router =express.Router();

router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/",getAllUsers)
router.put("/:userId",updateUser)
router.delete("/:id",deleteUser)



export default router