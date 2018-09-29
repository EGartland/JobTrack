const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');


const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(PORT, function(){
    console.log('app listening on PORT' + PORT)
})