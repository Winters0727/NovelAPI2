const Product = require('../models/product');

const postProduct = (req, res, next) => {
    Product.create({...req.body})
    .then(
        product => {
            res.status(201).json(product)
        }
    )
    .catch(
        err => {
            console.error(err)
            res.status(500).json({'error': err})
        }
    )
}

const getProduct = (req, res, next) => {
    console.log(req.body);
    console.log(req.query);
    console.log(req.params);
    const productId = req.params.productId;
    Product.findById(productId)
    .then(
        product => {
            res.status(200).json(product)
        }
    )
    .catch(
        err => {
            console.error(err)
            res.status(500).json({'error': err})
        }
    )

}

module.exports = { postProduct, getProduct };