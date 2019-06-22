const express = require('express');
const userRoute = express.Router();

User = require('../models/User');

userRoute.route('/create').post(function (request, response) {
  console.log('--- Create User --');
  var user = new User(request.body);
  user.save();
  response.status(200).json({'message': 'sdsd'});
});

userRoute.route('/load-all').post(function (request, response) {
  console.log('---- Load All ---');
  User.find(function (err, results) {
    response.status(200).json(results);
  });
});

module.exports = userRoute;
