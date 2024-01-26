import { Router } from "express";
import {createPost,createComment,createReply,allPost} from "../controllers/postControllers.js";
const postRoutes = Router();
postRoutes
.post('/createPost',createPost)
.post('/createComment',createComment)  
.post('./createReply',createReply)
.get('/allPost',allPost)
export default postRoutes;