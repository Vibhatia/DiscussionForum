import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ReplySchema = new Schema({
    commentID: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'CommentModel',
        required: true
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'UserModel',
      required: true
    },
    postID:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'PostModel',
        required: true
    },
    content: {
      type: String,
      required: true
    }
  },{timestamps:true});

  const ReplyModel = mongoose.model('Reply', ReplySchema);

  export default ReplyModel;