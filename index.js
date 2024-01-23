const express = require("express");

const quizRouter = require('./router/quiz.router')
const cors = require ('cors');
const app = express();

app.use(cors());

const PORT = 3000;


app.get('/', (req, res) => {
    res.send("hello geeks");

});

app.use('/quiz',quizRouter);

app.listen(process.env.PORT || PORT, () => {
    console.log("Server started");
});