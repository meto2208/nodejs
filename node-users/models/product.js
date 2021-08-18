const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  sku: {
    type: String,
    required: ['SKU is a required field']
  },
  name: {
    type: String,
    required: ['Name is a required field']
  },
  price: {
    type: Number,
    required: ['Price is a required field']
  },
  in_stock: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('product', productSchema);
