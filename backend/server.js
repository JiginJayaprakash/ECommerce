const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const { connectDB } = require('./src/db/conn');

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(require("./src/routes/record"));

connectDB();
   
app.listen(PORT, () => {
    console.log(`Server Listening on Port ${PORT}`);
});


