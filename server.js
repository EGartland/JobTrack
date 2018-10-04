const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');
const db = require('./models')

const PORT = process.env.PORT || 3001;

const app = express();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/jobsdb";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

app.use(express.static('client/public'));

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/api/test', (req, res) => {
    
})

app.get('*', (req, res) => 
    res.sendFile('client/public/index.html')
)

app.listen(PORT, function(){
    console.log('app listening on PORT ' + PORT)
})