const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const checkoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  product_Id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "product",
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

checkoutSchema.plugin(require("mongoose-autopopulate"));

const Checkout = mongoose.model("checkout", checkoutSchema);
module.exports = { Checkout };
