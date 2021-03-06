'use strict';
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes');
var dbController = require('./dbController');
const promisify = require('es6-promisify');
require('dotenv').config({ path: 'variables.env' });

mongoose.connect(process.env.DATABASE);

const app = express();
//var router = express.Router();
app.set('port', (process.env.PORT || 8000));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

//Use our router configuration when we call /api
app.use('/api', routes);

app.listen(app.get('port'), () => console.log(`Server is listening: http://localhost:${app.get('port')}`));