const express = require('express');
const router = express.Router();

router.use('/account', require('./account/author'));

router.use('/book', require('./book/book'));
router.use('/chapter', require('./book/chapter'));
router.use('/review', require('./review/review'));

module.exports = router;