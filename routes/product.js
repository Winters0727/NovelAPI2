const { getProduct, postProduct } = require('../controller/product');

var express = require('express');
var router = express.Router();

router.post('/', postProduct);

router.get('/:productId', getProduct);

module.exports = router;