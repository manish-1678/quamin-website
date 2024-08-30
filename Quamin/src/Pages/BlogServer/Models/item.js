const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Adding 'required: true' makes the field mandatory
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: String, required: true },
  content: { type: String, required: true },
});

const itemModel = mongoose.model("Item", itemSchema); // Model name should be capitalized (convention)
module.exports = itemModel;
