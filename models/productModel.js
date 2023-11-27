const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: Array, required: true },
});

module.exports = mongoose.model("Product", productSchema);
