import express from "express";
import passport from "passport";
import routes from "../routes";
import { postLogin, getJoin, getLogin, logout, postJoin, githubLogin, postGithubLogin } from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import { onlyPrivate, onlyPublic } from "../middlewares";

const globalRouter = express.Router()

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPrivate,logout);

globalRouter.get(routes.gitHub, githubLogin);
globalRouter.get(
    routes.githubCallBack, 
    passport.authenticate('github', { failureRedirect: '/login' }),
    postGithubLogin
)

export default globalRouter;