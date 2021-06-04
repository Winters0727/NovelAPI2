const { postChapter, getChapterAll, getChapter, updateChapter, deleteChapter } = require('../../controller/book/chapter');

const express = require('express');
const router = express.Router();

router.post('/', postChapter);

router.get('/', getChapterAll);
router.get('/:chapterId', getChapter);

router.put('/:chapterId', updateChapter);

router.delete('/:chapterId', deleteChapter);

module.exports = router;