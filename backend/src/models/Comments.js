import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const CommentSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    postID: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'PostModel',
      required: true

    },
    userID:{
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'UserModel',
      required: true
    }
  },{timestamps:true});

  const CommentModel = mongoose.model('Comment', CommentSchema);

  export default CommentModel;