const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router/APIrouter');

app.use(express.static('public'), bodyParser.json())
app.set('view engine', 'ejs')


app.use('/api', router);



module.exports = app;
