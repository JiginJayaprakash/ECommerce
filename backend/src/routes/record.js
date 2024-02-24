const { getProducts , getProduct} = require('../controllers/productController');
const express = require("express");

 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
router.get('/getProducts', getProducts);
router.get('/getProduct', getProduct);
 
module.exports = router;