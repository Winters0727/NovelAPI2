const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const Schema = mongoose.Schema;

const chapterSchema = new Schema({
    index: {
        type: Number,
        required: true,
    },
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

chapterSchema.plugin(autoIncrement.plugin, {
    model: 'Chapter',
    field: 'viewCount',
    startAt: 1,
    increment: 1,
})

module.exports = mongoose.model('Chapter', chapterSchema);