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
//   const getBooksData = async function (req, res) {
//     let books = await bookModel.find()
//     res.send({ data: books })
// }
const getBooksWithAuthorAndPublisherDetails = async function (req, res) {
  let specificBook = await bookModel.find().populate('author publisher')
  res.send({ data: specificBook })

}

 module.exports.createBook= createBook
  module.exports.getBooksWithAuthorAndPublisherDetails= getBooksWithAuthorAndPublisherDetails

