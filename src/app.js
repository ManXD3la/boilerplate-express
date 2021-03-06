require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('morgan');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');

const app = express();

const morganOption = (NODE_ENV === 'production') 
    ? 'tiny'
    : 'common';

app.use(morgan(morganOption));
app.use(cors());
app.use(helmet());

// GET Endpoints
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Error Handling

app.use(function errorHandler(error, req, res, next) {
    let response;
    if (NODE_ENV === 'production') {
        response = {error: { message: 'server error' }};
    }
    else {
        console.log.error(error);
        response = { message: error.message, error };
    }
    res.status(500).json(response);
});

module.exports = app;
