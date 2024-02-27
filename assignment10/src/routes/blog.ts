import { Router } from "express";
import { getAllBlogsController } from "../controllers/blog";
import { authGuard, roleGuard } from "../middlewares/user";



const blogRouter = Router();


blogRouter.get("/blogs", authGuard, roleGuard(["admin", "user"]), getAllBlogsController);


export default blogRouter;