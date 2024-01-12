const express = require("express");
const cors = require("cors");
const quizzes = require("./db/quizzes");

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
    console.log("Received a request"); // Add more logging statements
    console.log(quizzes);

    // Simulate an error for testing
    // Uncomment the next line to see if it affects the response
    // throw new Error("Intentional error");

    res.send("quizzes");
});

app.listen(process.env.PORT || PORT, () => {
    console.log("Server started");
});