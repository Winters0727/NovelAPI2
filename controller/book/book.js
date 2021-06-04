const Book = require('../../models/book/book');

const postBook = (req, res, next) => {
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

const getBook = (req, res, next) => {
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

module.exports = { postBook, getBook };