const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel=require("../models/publisherModel")

const createBook = async function (req, res) {
let book = req.body
    let authorid = book.author
    if (!authorid) {
        return res.send({ status: false, msg: "that this detail is " })
    }
    let author = await authorModel.findById(book.author)
    if(!author) {
        return res.send({status: false, msg: "Author id is not valid"})
    }

    
    let authorid1 = book.publisher
    if (!authorid1) {
        return res.send({ status: false, msg: "that this detail is required" })
    }

    let publisher = await publisherModel.findById(book.publisher)
    if(!publisher) {
        return res.send({status: false, msg: "Publisher id is not valid"})
    }

    let bookCreated = await bookModel.create(book)
    res.send({ data: bookCreated })
  }

const getBooksWithAuthorAndPublisherDetails = async function (req, res) {
  let specificBook = await bookModel.find().populate('Newauthor Newpublisher')
  res.send({ data: specificBook })

}
const updateData= async function (req, res) {

    //a)
    // get books by the publioshers - Penguin and HarperCollins
    let requiredPublishers = 
    await publisherModel.find({$or: [{name: "Penguin"},{name: "HarperCollins"}]}, {_id: 1})
    //let books = await bookModel.find().populate('publisher')
    //for
    let requiredPublisherIds = [] 
    for (let i = 0; i < requiredPublishers.length; i++) {
        requiredPublisherIds.push(requiredPublishers[i]._id)
    }

    let updatedBooks = await bookModel.updateMany({publisher : {$in: requiredPublisherIds}}, {isHardCover: true}, {new: true})
    res.send({data: updatedBooks})
}

 module.exports.createBook= createBook
  module.exports.getBooksWithAuthorAndPublisherDetails= getBooksWithAuthorAndPublisherDetails
  module.exports.updateData=updateData
