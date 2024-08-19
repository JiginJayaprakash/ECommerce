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
  console.log('started migration up addUser');
  return MongoClient.connect(uri)
    .then(client => {
      mClient = client
      return client.db();
    })
    .then(async (db) => {
      console.log('started migration up 2');
      var date = Date.now();
      var user = await db.collection('users')
      await user.insertMany([{
        'email': "test1@test.com", 'password': "$2a$11$5av8DXYicXDp26nziFw48u2DomVH6DtodAZRXbOBO2js7931ftqpK",
        'createdAt': date
      },{
        'email': "test@test.com", 'password': "$2a$11$5av8DXYicXDp26nziFw48u2DomVH6DtodAZRXbOBO2js7931ftqpK",
        'createdAt': date
      }])
      
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
      console.log('started migration down addUser');
      await db.collection('users').findOneAndDelete({ 'email': "test1@test.com" });
      await db.collection('users').findOneAndDelete({ 'email': "test@test.com" });
      mClient.close()
      return next()
    })
}
