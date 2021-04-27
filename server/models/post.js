import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 6,
    maxLength: 255,
  },
  password: {
    type: String,
    required: true,
    maxLength: 1024,
    minLength: 6,
  },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
