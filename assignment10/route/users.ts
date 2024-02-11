import express from 'express';
import { Protection } from "../controller/protect";
import { User } from "../controller/users";

const router = express.Router();

const user = new User();
const protect = new Protection();

router.post('/signUp', user.signUp);
router.post('/login', protect.protect, user.signUp);

export default router;