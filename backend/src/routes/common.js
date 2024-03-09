const {
  signup,
  login,
  userVerification,
} = require("../controllers/authController");
const express = require("express");

const commonRouter = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

commonRouter.post("/signup", signup);
commonRouter.post("/login", login);
commonRouter.get("/authenticate", userVerification);

module.exports = commonRouter;
