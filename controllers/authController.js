const express = require("express");
const jwt = require("jsonwebtoken");
const userdata = require("../db/users");
const {v4:uuid} = require("uuid");

const signupHandler = (req,res)=> {
    const{username,password} = req.body;
    const isUserPresent = userdata.users.some(user => user.username === username)
    if(isUserPresent){
        res.status(422).json({message:"userpresent"})
    }
    else{
        const id = uuid();
        const newUser = {id,username,password}
        userdata.users.push(newUser);
        const token =jwt.sign({id:username},process.env.SECRET_TOKEN);
        res.json({message:`success - created new user --> ${username}::${token}`})
    }
}

const loginHandler = (req,res) => {
    const {username,password} = req.body;
    const isUserNameVerified = userdata.users.some(user => user.username === username && user.password === password)
    if(isUserNameVerified){
        const token = jwt.sign({id:username},process.env.SECRET_TOKEN);
        res.json({username,token,message:"userverified"})
    }
    else{
        res.status(401).json({message:"invalidcredentials"})
    }
}

module.exports={loginHandler,signupHandler};;