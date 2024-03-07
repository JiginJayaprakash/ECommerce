const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  enabled: {
    type: Boolean,
    default: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: String,
  images: [
    {
      src: String,
    },
  ],
  price: {
    type: String,
    required: true,
  },
  highlights: {
    type: Array,
  },
  details: String,
});

productSchema.plugin(require("mongoose-autopopulate"));

const Product = mongoose.model("product", productSchema);
module.exports = { Product };
