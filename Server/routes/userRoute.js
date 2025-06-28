import express from "express";
import { isUserAuth, userLogin, userLogout, registerUser } from "../controllers/userController.js";
import authUser from "../middlewares/authUser.js";

const userRouter = express.Router();
userRouter.post('/register', registerUser);
userRouter.post('/login', userLogin);
userRouter.get('/is-auth', authUser, isUserAuth);
userRouter.get('/logout', authUser, userLogout);
export default userRouter;