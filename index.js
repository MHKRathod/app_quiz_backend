const express = require("express");

const quizRouter = require('./router/quiz.router');

const {loginRouter,signupRouter} = require("./router/auth.router");
const routeNotFound = require("./middleware/routeNotFound")
const cors = require ('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;


app.get('/', (req, res) => {
    res.send("hello geeks");

});

app.use('/quiz',quizRouter);

app.use('/auth/login',loginRouter)
app.use('/auth/signup',signupRouter)
app.use(routeNotFound);

app.listen(process.env.PORT || PORT, () => {
    console.log("Server started");
});