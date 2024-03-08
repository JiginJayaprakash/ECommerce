const { User } = require("../models/user");
const { createSecretToken } = require("../utils/token");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res, next) => {
  try {
    const { email, password, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({
        message: "User signed in successfully",
        token: token,
        success: true,
        user,
      });
    next();
  } catch (error) {
    console.error(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({
        message: "User logged in successfully",
        token: token,
        success: true,
      });
    next();
  } catch (error) {
    console.error(error);
  }
};

const userVerification = async (req, res, next) => {
  try {
    const cookie = req.headers.cookie;
    const token = cookie.split("; ").map((c) => {
      if (c.split("=")[0] == "token") {
        return c.split("=")[1];
      }
    })[0];
    if (!token) {
      return res.status(401).send({
        message: "UnAuthenticated",
      });
    }
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      if (err || !data) {
        return res.status(401).send({
          message: "UnAuthenticated",
        });
      } else {
        const user = await User.findById(data.id);
        if (user) 
        {
          res.locals.userId = data.id;  
          return next();
        }
        else {
          return res.status(401).send({
            message: "UnAuthenticated",
          });
        }
      }
    });
  } catch (ex) {
    console.log(ex);
    return res.status(500).send({
      message: "Internal server error",
    })
  }
};

module.exports = { signup, login, userVerification };
