'use strict'
const express = require('express');

let router = express.Router();


router.use('/image', require('./image'));

module.exports = router;
