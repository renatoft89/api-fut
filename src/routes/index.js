const express = require('express');

const router = express.Router();

const serieArouter = require('./brasileiraoA');

router.use('/brasileirao', serieArouter);

module.exports = router;