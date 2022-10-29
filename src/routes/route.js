const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")
// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

 router.post("/newPublisher", publisherController.NewPublisher )

 router.get("/getBooksData", bookController.getBooksWithAuthorAndPublisherDetails)
router.post("/createBook",bookController.createBook)
// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
router.post("/newAuthor",authorController.newAuthor)
router.put("/updateData", bookController.updateData)
module.exports = router;