const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  category: String,
  author: String,
  content: String,
});

const itemModel = mongoose.model("item", itemSchema);
module.exports = itemModel;
