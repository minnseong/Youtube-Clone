// require : node module를 어디선가 가져오는 역할
// const express = require('express')
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";
const app = express()

//const PORT = 4000

//function handleListening() {
//   console.log(`Listening on : http://localhost:${PORT}`);
//}
// arrow function
const handleProfile = (req, res) => res.send("You are on my profile!");
const handleHome = (req, res) => res.send("hello from home");

/*
// middleware function : next 사용
const betweenHome =(req, res, next) => {
    console.log("Between");
    next();
};
*/

//app.use(betweenHome);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));
app.use(helmet());
app.use(morgan("dev"))

// app.get home(/) 접근시, handleHome function call
app.get("/", handleHome);
app.get("/profile", handleProfile);
// use : /user로 접근시, 이 router 전체를 사용 ex) /user/ , /password , / edit
app.use("/user", userRouter);

// 4000 PORT를 listen 시작시, handleListening function call 
//app.listen(PORT, handleListening);

// 내 파일을 import 할때 app object를 주겠다는 의미
export default app;