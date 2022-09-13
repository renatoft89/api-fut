const express = require('express');

const router = express.Router();

const serieRouter = require('./brasileirao/index');

router.use('/brasileirao', serieRouter);

module.exports = router;