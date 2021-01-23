import express from "express";
import routes from "../routes";
import { change_password, users, user_detail, user_profile } from "../controllers/userController";

const userRouter = express.Router()

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, user_detail);
userRouter.get(routes.editProfile, user_profile);
userRouter.get(routes.changePassword, change_password);

export default userRouter;