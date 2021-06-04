const { postReview, getReviewAll, getReview, updateReview, deleteReview } = require('../../controller/review/review');

const express = require('express');
const router = express.Router();

router.post('/', postReview);

router.get('/', getReviewAll);
router.get('/:reviewId', getReview);

router.put('/:reviewId', updateReview);

router.delete('/:reviewId', deleteReview);

module.exports = router;