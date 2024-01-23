const express = require("express");
const quizRouter = express.router();
const quizzes = require('../db/quizzes');


quizRouter.route("/")
         .get((req,res) => {
            res.send(quizzes.data)
    });

module.exports = quizRouter;    