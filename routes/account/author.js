const { postAuthor, getAuthorAll, getAuthor, updateAuthor, deleteAuthor } = require('../../controller/account/author');

const express = require('express');
const router = express.Router();

router.post('/', postAuthor);
// router.post('/login', login);

router.get('/', getAuthorAll);
router.get('/:authorId', getAuthor);
// router.get('/logout', logout);

router.put('/:authorId', updateAuthor);

router.delete('/:authorId', deleteAuthor);

module.exports = router;