require('dotenv').config();
console.log("loaded Secret_Token:", process.env.SECRET_TOKEN);
const express = require("express");

const categoriesRouter = require("./router/categories.router"); 
const quizRouter = require('./router/quiz.router');

const {loginRouter,signupRouter} = require("./router/auth.router");
const authverify = require("./middleware/authverify");
const routeNotFound = require("./middleware/routeNotFound")
const cors = require ('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3300;

app.use((req, res, next) => {
    console.log('Request Headers:', req.headers);
    next();
  });

app.get('/', (req, res) => {
    res.send("hello geeks");

});

app.use('/categories',categoriesRouter);
app.use('/quiz',quizRouter);

app.use('/auth/login',loginRouter)
app.use('/auth/signup',signupRouter)
app.use(routeNotFound);

// app.listen(process.env.PORT || PORT, () => {
//     console.log("Server started");
// });

const port = process.env.PORT || 3001; // Use the specified port or default to 3000
app.listen(port, () => {
    console.log(`Server is running on port ${PORT}`);
});