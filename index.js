// require : node module를 어디선가 가져오는 역할
const express = require('express')
const app = express()
const PORT = 4000

function handleListening() {
    console.log(`Listening on : http://localhost:${PORT}`);
}

function handleHome(req, res) {
    res.send('hello from home');
}

function handleProfile(req, res) {
    res.send("You are on my profile")
}

// app.get home(/) 접근시, handleHome function call
app.get("/", handleHome);
app.get("/profile", handleProfile)

// 4000 PORT를 listen 시작시, handleListening function call 
app.listen(PORT, handleListening);