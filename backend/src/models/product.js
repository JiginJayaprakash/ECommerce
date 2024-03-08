const mongoose = require("mongoose");
var Schema = mongoose.Schema;

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
      src: {
        type: String,
      }
    }
  ],
  price: {
    type: String,
    required: true,
  },
  highlights: {
    type: Array,
  },
  details: String,
  userId:Schema.Types.ObjectId
});

productSchema.plugin(require("mongoose-autopopulate"));

const Product = mongoose.model("product", productSchema);
module.exports = { Product };
