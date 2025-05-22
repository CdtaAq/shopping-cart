const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  rating: Number,
  imageUrl: String,
});

module.exports = mongoose.model('Product', productSchema);
