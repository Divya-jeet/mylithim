const mongoose = require('mongoose');


const NewpublisherSchema = new mongoose.Schema( {
    name: String,
    headQuarter:String
})
module.exports = mongoose.model('NewPublisher', NewpublisherSchema)