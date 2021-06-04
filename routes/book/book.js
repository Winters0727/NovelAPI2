const { postBook, getBookAll, getBook, updateBook, deleteBook } = require('../../controller/book/book');

const express = require('express');
const router = express.Router();

router.post('/', postBook);

router.get('/', getBookAll);
router.get('/:bookId', getBook);

router.put('/:bookId', updateBook);

router.delete('/:bookId', deleteBook);

module.exports = router;