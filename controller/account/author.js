const { hashPassword, comparePassword } = require('../../utils/index');
const { createToken } = requre('../../utils/jwt');

const Author = require('../../models/account/author');

const postAuthor = async (req, res, next) => {
    try {
        const payload = {...req.body, 'userPassword': hashPassword(req.body['userPassword'])};
        const author = await Author.create(payload);
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

const login = async (req, res, next) => {
    try {
        const { userId, userPassword } = req.body;
        const author = Author.findOne({ 'userId': userId });
        if (Object.keys(author).length > 0) {
            if (comparePassword(userPassword, author['userPassword'])) {
                const payload = {
                    '_id': author['_id'],
                    'userName': author['userName'],
                    'profileImage': author['profileImage'],
                };
                const result = createToken(payload);
                await res.status(200).json(result);
            }
            else {
                await res.status(401).json({'message': '비밀번호가 일치하지 않습니다!'});
            }
        }
        else {
            await res.status(404).json({'message': '유저가 존재하지 않습니다!'});
        }
    }

    catch(err) {
        console.error(err);
        await res.status(500).json({'error': err});
    }
};

// const logout = async (req, res, next) => {

// };

module.exports = { postAuthor, getAuthorAll, getAuthor, updateAuthor, deleteAuthor, login };