const Book = require('../../models/book/book');

const postBook = async (req, res, next) => {
    try {
        const book = await Book.create({...req.body});
        await res.status(201).json(book);
    }

    catch(err) {
        console.error(err);
        await res.status(500).json({'error': err});
    }
};

const getBookAll = async (req, res, next) => {
    try {
        const options = req.query;
        const books = await Book.find(options);
        await res.status(200).json(books);
    }

    catch(err) {
        console.error(err);
        await res.status(500).json({'error': err});
    }
};

const getBook = async (req, res, next) => {
    try {
        const bookId = req.params['bookId'];
        await Book.findByIdAndUpdate(bookId, {$inc : { clickCount: 1 }});
        const book = await Book.findById(bookId);
        await res.status(200).json(book);
    }

    catch(err) {
        console.error(err);
        await res.status(500).json({'error': err});
    }

};

const updateBook = async (req, res, next) => {
    try {
        const bookId = req.params['bookId'];
        const book = await Book.findByIdAndUpdate(bookId, req.body);
        await res.status(200).json(book);
    }

    catch(err) {
        console.error(err);
        await res.status(500).json({'error': err});
    }
};

const deleteBook = async (req, res, next) => {
    try {
        const bookId = req.params['bookId'];
        await Book.findByIdAndDelete(bookId);
        await res.status(200);
    }

    catch(err) {
        console.error(err);
        await res.status(500).json({'error': err});
    }
};

module.exports = { postBook, getBookAll, getBook, updateBook, deleteBook };