const { sendEmail } = require("./sendemail/sendemail");
require('dotenv').config();


module.exports = (req, res) => {
    const data = req.body;

    const html = `
        <h1>Quote request from ${data.name}</h1>
        <ul>
          <li><strong>Name: </strong/> ${data.name}</li>
          <li><strong>Email: </strong/> ${data.email}</li>
          <li><strong>Phone number: </strong/> ${data.phone}</li>
          <li><strong>Car year: </strong/> ${data.year}</li>
          <li><strong>Car make: </strong/> ${data.make}</li>
          <li><strong>Car model: </strong/> ${data.model}</li>
          <li><strong>Need to fix: </strong/> ${data.fix}</li>
        </ul>
    `

    const message = {
        from: data.email,
        to: process.env.EMAIL_ID,
        subject: 'Quote request for windshield replacement',
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

