'use strict'
const mongodb = require('mongodb')
require("dotenv").config();
const MongoClient = mongodb.MongoClient
const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
} = process.env;

let uri 
if(process.env.IS_DOCKER ==='false' )
{
  uri =`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_NAME}?retryWrites=true&w=majority`}
else{
  uri =`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`}

module.exports.up = function (next) {
  let mClient = null
  return MongoClient.connect(uri)
    .then(client => {
      mClient = client
      return client.db();
    })
    .then(async (db) => {
      console.log('started migration up addproduct');
      var user = await db.collection('users').findOne({ 'email': "test1@test.com" });
      var product = await db.collection('products')
      await product.insertMany([{
      "enabled":true,
      "name":"Basic Tee 6-Pack",
      "images":[{"src":"https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"},
      {"src":"https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg"},
      {"src":"https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"},
      {"src":"https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg"}],
      "price":"$192",
      "highlights":["Hand cut and sewn locally","Dyed with our proprietary colors","Pre-washed & pre-shrunk","Ultra-soft 100% cotton"],
      "userId":user._id,
      "details":"The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming 'Charcoal Gray' limited release."}])
      mClient.close()
      return next()
    })
}

module.exports.down = function (next) {
  let mClient = null
  return MongoClient.connect(uri)
    .then(client => {
      mClient = client
      return client.db();
    })
    .then(async (db) => {
      console.log('started migration down addproduct');
      await db.collection('products').findOneAndDelete({ 'name': "Basic Tee 6-Pack" });
      mClient.close()
      return next()
    })
}
