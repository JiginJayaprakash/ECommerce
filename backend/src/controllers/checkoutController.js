const mongoose = require("mongoose");
const { Checkout } = require("../models/checkout");

const getcheckout = async (req, res, next) => {
  const query = Checkout.find();
  const checkouts = await query.exec();
  return res.status(200).json(checkouts);
};

const addCheckout = async (req, res, next) => {
  const { name, image, price, product_Id } = req.body;
  const query = Checkout.find({ product_Id: product_Id });
  const data = await query.exec();
  if (data.length > 0) {
    const quantity = data[0].quantity;
    const updateCart = await Checkout.findOneAndUpdate(
      { product_Id: product_Id },
      { quantity: quantity + 1 },
    );
    return res.json(updateCart);
  } else {
    const c = new Checkout({
      name: name,
      image: image,
      price: price,
      product_Id: product_Id,
    });
    const result = await c.save();
    return res.json(result);
  }
};

const deleteProductFromCheckout = async (req, res, next) => {
  const { id } = req.query;
  const query = Checkout.findOneAndDelete({
    product_Id: id,
  });
  const data = await query.exec();
  return res.status(200).json(data);
};

module.exports = { getcheckout, addCheckout, deleteProductFromCheckout };
