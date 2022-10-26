const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    author_id: Number,
    author:String, 
    age:Number,
    address:String
}, { timestamps: true });


module.exports = mongoose.model('author', authorSchema) //users
