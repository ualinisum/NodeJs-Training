import { Schema, model } from "mongoose";

const BlogSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  tags: {
    default: [],
    type: [String],
  },
  creationDate: { default: Date.now, type: Date },
  isActive: { default: true, type: Boolean },
  userRating: {
    favs: Number,
    likes: Number,
    views: Number,
  },
});

const Blog = model("Post", BlogSchema);

export default Blog;
