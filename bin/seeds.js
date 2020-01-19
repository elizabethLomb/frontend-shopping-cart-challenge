require('../config/db.config')
const mongoose = require('mongoose');

const Product = require('../models/product.model');

const products = [
  {
    code: "TSHIRT",
    name: "Cabify T-Shirt",
    price: 20,
    image: "/img/shirt.png"
  },
  {
    code: "MUG",
    name: "Cafify Coffee Mug ",
    price: 7.50,
    image: "/img/mug.png"
  },
  {
    code: "CAP",
    name: "Cabify Cap",
    price: 5,
    image: "/img/cap.png"
  }
]

Product.create(products)
  .then((products) => console.info(`${products.length} added to DataBase`))
  .catch(error => console.error(error))
  .then(() => mongoose.connection.close());