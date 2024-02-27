import { Response, Request } from "express";
import { loginBodySchema, signupBodySchema } from "../validations/user";
import User from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signupController = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const saltRounds = 10;
        const { userName, email, password } = await signupBodySchema.validateAsync(body);

        const doesEmailExist = await User.findOne({ email });
        if (doesEmailExist) {
            return res.status(400).send({ message: "Email already exist" });
        }

        const hashPassword = await bcrypt.hash(password, saltRounds);
        const payload = {
            userName,
            email,
            password: hashPassword,
        };
        const createdUser = await User.create(payload);
        return res.status(200).send({ message: "User Created Successfully", createdUser });

    } catch (err: any) {
        if (err.name === 'ValidationError') {
            return res.status(400).send({ name: err.name, message: err.message });
        } else {
            return res.status(500).send({ message: "Internal Server Error" });
        }
    }
};

const loginController = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const { email, password } = await loginBodySchema.validateAsync(body);
        const user = await User.findOne({ email });

        if (user) {
            const comparePassword = await bcrypt.compare(password, user.password);
            if (comparePassword) {
                const token = jwt.sign({ userId: user._id, roles: user.roles }, "secret_key", { expiresIn: "1h" },);
                return res.status(200).send({ message: "Loged In Successfully", data: { email: user.email, userName: user.userName, token } });
            } else {
                return res.status(401).send({ message: "Invalid Email or Password", });
            }
        } else {
            return res.status(401).send({ message: "Invalid Email or Password", });
        }

    } catch (err: any) {
        console.log(err, "error");

        if (err.name === 'ValidationError') {
            return res.status(400).send({ name: err.name, message: err.message });
        } else {
            return res.status(500).send({ message: "Internal Server Error" });
        }

    }
};

export { signupController, loginController };