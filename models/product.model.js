const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema ({
  code: String,
  name: String,
  price: Number,
  image: String,
})

//exporting
const Product = mongoose.model('Poduct', productSchema)
module.exports = Product;