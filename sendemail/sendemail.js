const nodemailer = require('nodemailer');
require('dotenv').config();

function sendEmail(message, callback) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_ID,
          pass: process.env.EMAIL_PASS
        }
    });

    transporter.sendMail(message, (err, info) => {
        if (err) {
          console.log('Error occurred. ' + err.message);
          callback({
            error: true,
            message: err.message || 'error sending email'
          });
        } else {
          console.log('Message sent: %s', info.messageId);
          callback({
            error: false,
            message: 'Message sent successfully'
          });
        }
      });
}



module.exports = {sendEmail};