const express = require('express');

const serieController = require('../../controllers/serieController')

const serieRouter = express.Router();

serieRouter.get('/:serie?', serieController);

module.exports = serieRouter