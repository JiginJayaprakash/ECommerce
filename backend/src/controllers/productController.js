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

const addProduct = async (req, res, next) => {
  const { name, image, price, desc, details, highlights } = req.body;
  const product = new Product({
    name: name,
    images: image,
    price: price,
    description:desc,
    details: details,
    highlights: highlights,
    userId:res.locals.userId
  });  
  const result = await product.save();
  return res.status(200).json(result);
};

const getProductByUserId = async (req, res, next) => {
  const query = Product.find({ userId: res.locals.userId });
  const data = await query.exec();
  return res.status(200).json(data);
};
module.exports = { getProducts, getProduct, addProduct, getProductByUserId};
