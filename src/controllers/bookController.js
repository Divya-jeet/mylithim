const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const getBookData= async function (req, res) {
    let allBook= await bookModel.find().select({
        bookname: 1,
        authorname: 1,
        _id: 0,
      });
    res.send({msg: allBook})
}
const getBooksInYear = async function (req, res) {
    let year = req.params.year;
    let year1 = await bookModel.find({ year });
    res.send({ msg: year1 });
  };
  const getParticularBooks = async function (req, res) {
    let allBook = await bookModel.find({ bookName: /^hi/i });
    res.send({ msg: allBook });
};
const getXINRBooks = async function (req, res) {
    let INDPrice = await bookModel.find({
      $or: [{ indianPrice: "100INR" }, { indianPrice: "200INR" }],
    });
    res.send({ msg: INDPrice });
  };
  const getRandomBooks = async function (req, res) {
    let GT500 = await bookModel.find({ totalpages: { $gt: 500 } });
    res.send({ msg: GT500 });
  };
module.exports.createBook= createBook
module.exports.getBookData= getBookData
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getXINRBooks= getXINRBooks