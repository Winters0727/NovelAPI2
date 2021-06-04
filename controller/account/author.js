const Author = require('../../models/account/author');

const postAuthor = async (req, res, next) => {
    try {
        const author = await Author.create({...req.body});
        await res.status(201).json(author);
    }

    catch(err) {
        console.error(err);
        await res.status(500).json({'error': err});
    }
};

const getAuthorAll = async (req, res, next) => {
    try {
        const options = req.query;
        const authors = await Author.find(options);
        await res.status(200).json(authors);
    }

    catch(err) {
        console.error(err);
        await res.status(500).json({'error': err});
    }
};

const getAuthor = async (req, res, next) => {
    try {
        const authorId = req.params['authorId'];
        const author = await Author.findById(authorId);
        await res.status(200).json(author);
    }

    catch(err) {
        console.error(err);
        await res.status(500).json({'error': err});
    }

};

const updateAuthor = async (req, res, next) => {
    try {
        const authorId = req.params['authorId'];
        const author = await Author.findByIdAndUpdate(authorId, req.body);
        await res.status(200).json(author);
    }

    catch(err) {
        console.error(err);
        await res.status(500).json({'error': err});
    }
};

const deleteAuthor = async (req, res, next) => {
    try {
        const authorId = req.params['authorId'];
        await Author.findByIdAndDelete(authorId);
        await res.status(200);
    }

    catch(err) {
        console.error(err);
        await res.status(500).json({'error': err});
    }
};

module.exports = { postAuthor, getAuthorAll, getAuthor, updateAuthor, deleteAuthor };