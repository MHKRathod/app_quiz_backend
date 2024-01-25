const express = require("express");
const jwt = require("jsonwebtoken");
const userdata = require("../db/users");

const loginRouter = express.Router();

       loginRouter.route("/")
         .post((req,res) => {
            try{
              const {username,password} = req.body;
              console.log(req.body)
              const isUserNameVerified = userdata.users.some(user => user.username === username && user.password === password)
              if(isUserNameVerified){
                const token = jwt.sign({id:username},process.env.SECRET_TOKEN)
                  res.json({username,token,message:"userverified"})
              } 
              else{
                  res.status(401).json({message:"invalidcredentials"})
              }
            }
            catch(error){
              res.send(error)
            }
          })

module.exports=loginRouter;