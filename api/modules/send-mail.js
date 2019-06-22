var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'madmax.ever@gmail.com',
    pass: 'as12as12'
  }
});


var mailOptiions = {
  from: 'madmax.ever@gmail.com',
  to: 'madushanka991@gmail.com',
  subject: 'Test Email from Node App',
  text: 'This is a test email from node js application'
};


transporter.sendMail(mailOptiions, function (error, info) {
  if (error) {
    console.log('Error' + error)
  } else {
    console.log(info.response);
  }
});
