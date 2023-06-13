const express = require('express');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors')

const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/', routes);

app.listen(process.env.PORT || port, () => {
    console.log('App is running on port ' + port);
})