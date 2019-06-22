const express = require('express');
const path = require('path');
bodyParser = require('body-parser');
cors = require('cors');
mongoose = require('mongoose');
dbConnection = require('./db');

// var mail = require('./modules/send-mail');
var eureka_registration = require('./modules/eureka-register');

//------------ Database Connection Establishment
mongoose.Promise = global.Promise;
mongoose.connect(dbConnection.DB, {useNewUrlParser: true}, function(err,success){
  console.log(err);
});

//-------------- Data Populating ------
const nodeApp = express();
nodeApp.use(bodyParser.json());
nodeApp.use(cors());
const userRoute = require('./routes/user.route');
const homeRoute = require('./routes/home.route');
nodeApp.use('/user', userRoute);
nodeApp.use('/', homeRoute);

//-------------- Node server starting -----
serverPort = 3002;
const sever = nodeApp.listen(serverPort,function () {
  console.log('-------- Server Started Listening on PORT - 3002 ------');
});



