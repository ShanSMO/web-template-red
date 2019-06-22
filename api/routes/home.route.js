const express = require('express');
const homeRoute = express.Router();

homeRoute.get('/',function (req, res) {
  res.send('<p style="color: #19735a;font-size: 25px;font-weight: 600;text-align: center;padding-top: 100px;font-family: sans-serif;">Node Server Started</p>');
});

module.exports = homeRoute;
