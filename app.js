// require : node module를 어디선가 가져오는 역할
// const express = require('express')
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

const app = express();

app.use(helmet({ contentSecurityPolicy: false }));
app.set('view engine', "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));
app.use(morgan("dev"));

app.use(localsMiddleware);
// use : /user로 접근시, 이 router 전체를 사용 ex) /user/ , /password , / edit
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);


// 내 파일을 import 할때 app object를 주겠다는 의미
export default app;