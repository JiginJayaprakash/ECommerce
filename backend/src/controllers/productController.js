const mongoose = require('mongoose');
const { product } = require('../models/product');


function getProducts() {
    console.log('test')
    const query = product.find();
        const products = query.exec();
        console.log(products);
        return products.then(function(d) {
            console.log(d);
        });
        
    // Product.find({"number":1}, function (err, products) {
    //     var productMap = {};

    //     products.forEach(function (product) {
    //         productMap[product._id] = product;
    //     });

    //     res.send(productMap);
    // });
}

module.exports = { getProducts };