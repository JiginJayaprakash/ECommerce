const mongoose = require('mongoose');
const { product } = require('../models/product');


const getProducts = async (req, res, next) => {
    const query = product.find();
    const products = await query.exec();
    console.log(products);
    return res
        .status(200)
        .json(products);
}

const getProduct = async (req, res, next) => {
    console.log(req.query);
    const { id } = req.query;
    const query = product.find({ _id: id });
    const data = await query.exec();
    console.log(data);
    return res
        .status(200)
        .json(data);
}

module.exports = { getProducts, getProduct };