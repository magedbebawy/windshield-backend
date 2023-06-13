const { sendEmail } = require("./sendemail/sendemail");
require('dotenv').config();

module.exports = (req, res) => {
    const data = req.body;

    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="template.css">
        <title>Email</title>
    </head>
    <body class="container">
        <h1>Message from ${data.name}</h1>
        <ul>
          <li><strong>Name: </strong/> ${data.name}</li>
          <li><strong>Email: </strong/> ${data.email}</li>
          <li><strong>Phone number: </strong/> ${data.phone}</li>
          <li><strong>Message: </strong/> ${data.message}</li>
        </ul>
    </body>
    </html>
    `

    const message = {
        from: data.email,
        to: process.env.EMAIL_ID,
        subject: 'Message for windshield replacement',
        html: html
    };

    sendEmail(message, (response) => {
        console.log(response);
        if(response.error) {
            res.send( {
                statusCode: 500,
                message: 'Server error',
                error: response.message
            });
        } else {
            res.send( {
                statusCode: 200,
                message: response.message,
                error: null
            });
        }
    });
};

