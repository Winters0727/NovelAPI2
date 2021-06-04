const Chapter = require('../../models/book/chapter');

const postChapter = async (req, res, next) => {
    try {
        const chapter = await Chapter.create({...req.body});
        await res.status(201).json(chapter);
    }

    catch(err) {
        console.error(err);
        await res.status(500).json({'error': err});
    }
};

const getChapterAll = async (req, res, next) => {
    try {
        const options = req.query;
        const chapters = await Chapter.find(options);
        await res.status(200).json(chapters);
    }

    catch(err) {
        console.error(err);
        await res.status(500).json({'error': err});
    }
};

const getChapter = async (req, res, next) => {
    try {
        const chapterId = req.params['chapterId'];
        await Chapter.findByIdAndUpdate(chapterId, {$inc : { viewCount: 1 }});
        const chapter = await Book.findById(chapterId);
        await res.status(200).json(chapter);
    }

    catch(err) {
        console.error(err);
        await res.status(500).json({'error': err});
    }

};

const updateChapter = async (req, res, next) => {
    try {
        const chapterId = req.params['chapterId'];
        const chapter = await Chapter.findByIdAndUpdate(chapterId, req.body);
        await res.status(200).json(chapter);
    }

    catch(err) {
        console.error(err);
        await res.status(500).json({'error': err});
    }
};

const deleteChapter = async (req, res, next) => {
    try {
        const chapterId = req.params['chapterId'];
        await Chapter.findByIdAndDelete(chapterId);
        await res.status(200);
    }

    catch(err) {
        console.error(err);
        await res.status(500).json({'error': err});
    }
};

module.exports = { postChapter, getChapterAll, getChapter, updateChapter, deleteChapter };