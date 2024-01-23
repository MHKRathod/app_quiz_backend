const express = require("express");

const quizRouter = require('./router/quiz.router');
const userdata = require("./db/users");
const cors = require ('cors');
const app = express();

app.use(cors());

const PORT = 3000;


app.get('/', (req, res) => {
    res.send("hello geeks");

});

app.use('/quiz',quizRouter);

app.post("/auth/login",(req,res) => {
    const {username,password} = req.body;
    const isUserNameVerified = userdata.users.some(user => user.username === username && user.password === password)
    if(isUserNameVerified){
        res.json("userverified")
    } 
    else{
        res.status(401).json({message:"invalidcredentials"})
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log("Server started");
});