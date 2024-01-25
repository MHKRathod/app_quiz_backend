const express = require("express");

const quizRouter = require('./router/quiz.router');
const userdata = require("./db/users");
const cors = require ('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;


app.get('/', (req, res) => {
    res.send("hello geeks");

});

app.use('/quiz',quizRouter);

app.post('/auth/login',(req,res) => {
  try{
    const {username,password} = req.body;
    console.log(req.body)
    const isUserNameVerified = userdata.users.some(user => user.username === username && user.password === password)
    if(isUserNameVerified){
        res.json("userverified")
    } 
    else{
        res.status(401).json({message:"invalidcredentials"})
    }
  }
  catch(error){
    res.send(error)
  }
})

app.listen(process.env.PORT || PORT, () => {
    console.log("Server started");
});