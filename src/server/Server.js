require('dotenv').config();

const express = require('express');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger-output.json');

const router = require('./routes/index.js');

const cors = require('cors');

const server = express();

server.use(cors());

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(express.static('public'));

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
server.use('/', router);

module.exports = server;
