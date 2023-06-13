const express = require('express');
const router = express.Router();
const contact = require('./contact');
const quote = require('./quote');

router.post('/contact', contact);

router.post('/quote', quote);

router.post('/admin', (req, res) => {
    res.send('Signed in');
})

module.exports = router;