const { User } = require("../models/user");
var bs58 = require('bs58');
require("dotenv").config()

const { LAMPORTS_PER_SOL,Connection, clusterApiUrl, PublicKey } = require("@solana/web3.js");

const CLUSTER_URL = process.env.RPC_URL ?? clusterApiUrl("devnet");
const connection = new Connection(CLUSTER_URL, "single");


const getBalance = async (req, res, next) => {
  
  const query = User.find({ _id: res.locals.userId });
  const data = await query.exec();
  const secretKey = bs58.decode(data[0].accountKeyPair);
  const key = PublicKey.decode(secretKey);

  // const airdropSignature = connection.requestAirdrop(
  //   key,
  //   LAMPORTS_PER_SOL
  // ).catch((err) => {
  //   console.error(`Error: ${err}`);
  // });

  const lamports = await connection.getBalance(key).catch((err) => {
    console.error(`Error: ${err}`);
  });
  return res.status(200).json(lamports);
  };

module.exports = { getBalance };
