import { Router } from "express";
import { loginController, signupController } from "../controllers/user";
import { authGuard } from "../middlewares/user";


const userRouter = Router();


userRouter.post("/signup", signupController);
userRouter.post("/login", loginController);


export default userRouter;