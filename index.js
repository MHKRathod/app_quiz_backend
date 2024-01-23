const express = require("express");
const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
    res.send("hello geeks");

});

app.get("/quiz",(req,res) => {
    res.send(quizzes)
})

app.listen(process.env.PORT || PORT, () => {
    console.log("Server started");
});