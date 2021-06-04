const Review = require('../../models/review/review');

const postReview = async (req, res, next) => {
    try {
        const review = await Review.create({...req.body});
        await res.status(201).json(review);
    }

    catch(err) {
        console.error(err);
        await res.status(500).json({'error': err});
    }
};

const getReviewAll = async (req, res, next) => {
    try {
        const options = req.query;
        const reviews = await Review.find(options);
        await res.status(200).json(reviews);
    }

    catch(err) {
        console.error(err);
        await res.status(500).json({'error': err});
    }
};

const getReview = async (req, res, next) => {
    try {
        const reviewId = req.params['reviewId'];
        await Review.findByIdAndUpdate(reviewId, {$inc : { viewCount: 1 }});
        const review = await Book.findById(reviewId);
        await res.status(200).json(review);
    }

    catch(err) {
        console.error(err);
        await res.status(500).json({'error': err});
    }

};

const updateReview = async (req, res, next) => {
    try {
        const reviewId = req.params['review'];
        const review = await Review.findByIdAndUpdate(reviewId, req.body);
        await res.status(200).json(review);
    }

    catch(err) {
        console.error(err);
        await res.status(500).json({'error': err});
    }
};

const deleteReview = async (req, res, next) => {
    try {
        const reviewId = req.params['reviewId'];
        await Review.findByIdAndDelete(reviewId);
        await res.status(200);
    }

    catch(err) {
        console.error(err);
        await res.status(500).json({'error': err});
    }
};

module.exports = { postReview, getReviewAll, getReview, updateReview, deleteReview };