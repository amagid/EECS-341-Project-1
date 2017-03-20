'use strict';
const http = require('http');
const express = require('express');
const app = express();
const config = require('../config').get();
const db = require('./services/mysql');
const routes = require('./routes');
const bodyParser = require('body-parser');
const responsePromise = require('./middlewares/response-promise');
const morgan = require('morgan');
const cors = require('cors');

db.connect();
setUpAPI();

const server = http.Server(app);

//Conditional port assignment to allow you to connect via a different port
//on startup if you would prefer that. Default is 3001.
server.listen(process.env.PORT || config.app.port);
console.log(`Server listening on port ${process.env.PORT || config.app.port}`);


function setUpAPI() {
    //General middlewares
    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(responsePromise);
    //Mount routes
    const router = express.Router();
    routes(router);

    //Serve main page
    router.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
    router.get('/css', (req, res) => res.sendFile(__dirname + '/style.css'));
    router.get('/js', (req, res) => res.sendFile(__dirname + '/script.js'));
    
    app.use('/', router);
}