const express = require("express");
const cors = require("cors");
const quizzes = require("./db/quizzes");

const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS for all routes

app.get('/', (req, res) => {
    console.log(quizzes);
    res.send("quizzes");
});

app.listen(process.env.PORT || PORT, () => {
    console.log("server started");
});