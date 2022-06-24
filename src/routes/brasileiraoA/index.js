const express = require('express');

const serieAcontroller = require('../../controllers/serieAcontroller')

const serieArouter = express.Router();

serieArouter.get('/', serieAcontroller);

module.exports = serieArouter