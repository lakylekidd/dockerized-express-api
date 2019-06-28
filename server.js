// Use local env secret variables
require('dotenv').config();
const express = requie('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');

// The server configuration
const config = {
    name: 'dockerized-express-api',
    port: 3000,
    host: '0.0.0.0'
};

// Setup app and logging
const app = express();
const logger = log({
    console: true,
    file: false,
    label: config.name
});