'use strict'
const mongodb = require('mongodb')
const { Keypair } = require("@solana/web3.js");
require("dotenv").config();
const { LAMPORTS_PER_SOL,Connection, clusterApiUrl } = require("@solana/web3.js");
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


const CLUSTER_URL = process.env.RPC_URL ?? clusterApiUrl("devnet");
const connection = new Connection(CLUSTER_URL, "single");

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
      var kp1 = Keypair.generate()
      var kp2 = Keypair.generate()
      await user.insertMany([{
        'email': "test1@test.com", 'password': "$2a$12$jL0cCdYvUdkf1gvRI5/K6upSTBk2.3H.KC7TXHoSvGdWti/SHPGqu",
        'createdAt': date, 'accountKeyPair' : kp1.publicKey.toBase58()
      },{
        'email': "test@test.com", 'password': "$2a$12$jL0cCdYvUdkf1gvRI5/K6upSTBk2.3H.KC7TXHoSvGdWti/SHPGqu",
        'createdAt': date, 'accountKeyPair' : kp2.publicKey.toBase58()
      }])
      await connection.requestAirdrop(
        kp1.publicKey,
        LAMPORTS_PER_SOL
      ).catch((err) => {
        console.error(`Error: ${err}`);
      });
      await connection.requestAirdrop(
        kp2.publicKey,
        LAMPORTS_PER_SOL
      ).catch((err) => {
        console.error(`Error: ${err}`);
      });
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
