const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter a title"],
  },
  body: {
    type: String,
    required: [true, "Please enter a body"],
  },
  author: {
    type: String,
    required: [true, "Please enter an author"],
  },
});

module.exports = mongoose.model("Post", postSchema);
