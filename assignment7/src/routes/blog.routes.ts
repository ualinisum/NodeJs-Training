import { Router } from "express";
import {
  deleteBlog,
  getAllBlogs,
  postBlog,
  updateBlog,
} from "../controllers/blog.controllers";
import { authorizeUser } from "../middleware/authMiddleware";

const blogRouter = Router();

blogRouter.get("/blog", getAllBlogs);
blogRouter.post("/blog", postBlog);
blogRouter.put("/blog/:id", updateBlog);
blogRouter.delete("/blog/:id", authorizeUser, deleteBlog);

export default blogRouter;
