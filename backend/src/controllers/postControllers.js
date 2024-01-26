import PostModel from "../models/Post.js";
import CommentModel from "../models/Comments.js";
// import PostModel from "../models/Post.js";
const createPost= async (req,res)=>{
    try {
        const { title, content, userID } = req.body;
        const newPost = new PostModel({
          title,
          content,
          userID,
        });
    
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}
const createComment = async(req,res)=>{
    try {
        const { postID, content, userID } = req.body;
        const newComment = new CommentModel({
          postID,
          content,
          userID,
        });
    
        const savedComment = await newComment.save();
        res.status(201).json(savedComment);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}
const createReply = async(req,res)=>{
    try {
        const { postID, content, userID,commentID } = req.body;
        const newReply = new ReplyModel({
          postID,
          content,
          userID,
          commentID
        });
    
        const savedReply = await newReply.save();
        res.status(201).json(savedReply);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}
const allPost = async(req,res)=>{
    try{
        const posts = await PostModel.find({});
        console.log(posts);
        res.status(200).json(posts);
    }catch(err){
        console.log(err);

        res.status(500).json({ error: 'Internal Server Error' });

    }
}
export {
    createPost,createComment,createReply,allPost
};