const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema(
  {
    bookName: String,
    authorName: String,
    tags: [String],
    year: {
      type: Number,
      default: 2021,
    },
    prices: {
      indianPrice: String,
      europePrice: String,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    stockAvailable: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);



// String, Number
// Boolean, Object/json, array