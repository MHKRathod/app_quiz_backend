const express = require("express");
const cors = require("cors");


const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send("hello geeks");

    // Simulate an error for testing
    // Uncomment the next line to see if it affects the response
    // throw new Error("Intentional error");
});

app.listen(process.env.PORT || PORT, () => {
    console.log("Server started");
});