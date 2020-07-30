const express = require('express');
const morgan = require('morgan')
var path = require('path')
var fs = require('fs')
const app = express();

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

var logger = ((req,res,next)=>{
    app.use(morgan('tiny', { stream: accessLogStream }))
    console.log("logging in access.log");
    next();
})


module.exports = logger;