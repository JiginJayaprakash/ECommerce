const { User } = require("../models/user");
var bs58 = require('bs58');
require("dotenv").config()

const CLUSTER_URL = process.env.RPC_URL ?? clusterApiUrl("devnet");

const getBalance = async (req, res, next) => {
  return res.status(200).json();
  };

module.exports = { getBalance };
