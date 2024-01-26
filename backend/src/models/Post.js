import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'UserModel',
      required: true

    },
    content: {
      type: String,
      required: true
    }
  },{timestamps:true});

  const PostModel = mongoose.model('Post', PostSchema);

  export default PostModel;