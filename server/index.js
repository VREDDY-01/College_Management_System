const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const { log } = require('console');
dotenv.config();

//MIDDILWARES
const app = express();
let server = http.createServer(app);
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//Passport Middleware
app.use(passport.initialize());






const PORT = process.env.PORT || 5000;

app.use('/',(req,res)=>{
    res.status(200).json(_response);
});


server.listen(PORT, ()=>{
   console.log("Server started at port 5000");
});

