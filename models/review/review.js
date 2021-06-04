const mongoose = require('mongoose');
// const autoIncrement = require('mongoose-auto-increment');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
        required: true,
    },
    book: {
        type: Schema.Types.ObjectId,
        ref: 'Book',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    context: {
        type: String,
        required: true,
    },
    viewCount: {
        type: Number,
        required: true,
        default: 0,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

// reviewSchema.plugin(autoIncrement.plugin, {
//     model: 'Review',
//     field: 'viewCount',
//     startAt: 0,
//     increment: 1,
// });

module.exports = mongoose.model('Review', reviewSchema);