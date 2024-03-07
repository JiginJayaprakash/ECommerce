'use strict'
// var db = require('./src/db');
const mongodb = require('mongodb')
require("dotenv").config();
const MongoClient = mongodb.MongoClient
const uri = process.env.mongoDB_URI;

module.exports.up = function (next) {
  let mClient = null
  return MongoClient.connect(uri)
    .then(client => {
      mClient = client
      return client.db();
    })
    .then(async (db) => {
      var date = Date.now();
      var user = await db.collection('users')
      await user.insertMany([{
        'email': "test1@test.com", 'password': "$2a$12$jL0cCdYvUdkf1gvRI5/K6upSTBk2.3H.KC7TXHoSvGdWti/SHPGqu",
        'createdAt': date
      }])
      mClient.close()
      return next()
    })
}

module.exports.down = function (next) {
  let mClient = null
  console.log(1)
  return MongoClient.connect(uri)
    .then(client => {
      mClient = client
      return client.db();
    })
    .then(async (db) => {
      await db.collection('users').findOneAndDelete({ 'email': "test1@test.com" });
      mClient.close()
      return next()
    })
}
