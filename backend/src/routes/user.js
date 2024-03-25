const { getProducts, getProduct, addProduct,getProductByUserId } = require("../controllers/productController");
const {
  getcheckout,
  addCheckout,
  deleteProductFromCheckout,
} = require("../controllers/checkoutController");
const {
  getBalance
} = require("../controllers/solanaController");
const express = require("express");

const router = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

router.post("/addProduct", addProduct);
router.get("/getProductByUserId", getProductByUserId);

router.get("/getProducts", getProducts);
router.get("/getProduct", getProduct);
router.get("/getcheckout", getcheckout);
router.post("/addCheckout", addCheckout);
router.get("/deleteProductFromCheckout", deleteProductFromCheckout);
router.get("/getBalance", getBalance);


module.exports = router;
