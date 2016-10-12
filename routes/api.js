const express = require('express');

let router = express.Router();


router.use('/image', require('./image'));
router.use('/crud', require('./cruds'));

module.exports = router;
