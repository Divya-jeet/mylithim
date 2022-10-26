const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    name:String,
    author_id:{type:Number,required:true},
    price:Number,
    rating:Number,
    
    address:String
}, { timestamps: true });


module.exports = mongoose.model('book', bookSchema) //users
