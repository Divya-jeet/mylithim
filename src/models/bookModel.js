const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookname: {
        type: String,
        required: true,
    },
    price: {
        indian: {
            type: String,
            required: true,
        },
        euro: {
            type: String,
            required: true,
        },
    },
    year: {
        type: Number,

        default: 2021,
    },
    tags: [String],
    authorname: {
        type: String,
        required: true,
    },
    totalpages: {
        type: Number,
        required: true,
    },
    stockavailable: {
        type: Boolean,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //users



// String, Number
// Boolean, Object/json, array