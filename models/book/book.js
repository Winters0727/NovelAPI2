const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    cover: {
        type: String,
        default: ''
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

module.exports = mongoose.model('Book', bookSchema);