const mongoose = require("mongoose");
const { Product } = require("../models/product");

const getProducts = async (req, res, next) => {
  const query = Product.find();
  const products = await query.exec();
  return res.status(200).json(products);
};

const getProduct = async (req, res, next) => {
  const { id } = req.query;
  const query = Product.find({ _id: id });
  const data = await query.exec();
  return res.status(200).json(data);
};

module.exports = { getProducts, getProduct };
