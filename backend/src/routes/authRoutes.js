import { Router } from "express";
import { registerUser,loginUser,sendOTP,verifyOTP } from "../controllers/authControllers.js";
const authRoutes = Router();

authRoutes
.post('/registerUser', registerUser)
.post('/loginUser' , loginUser)
.post('/sendOTP',sendOTP)
.post('/verifyOTP' , verifyOTP);
  
export default authRoutes;