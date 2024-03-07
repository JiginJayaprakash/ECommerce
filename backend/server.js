const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const { connectDB } = require("./src/db/conn");
const cookieParser = require("cookie-parser");
const auth = require("./src/middleware/authMiddleware");

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Listening on Port ${PORT}`);
});
app.use(
  cors({
    origin: [process.env.corsOrigin],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(require("./src/middleware/authMiddleware"));
app.use(cookieParser());
app.use(express.json());
app.use(require("./src/routes/user"));
app.use(require("./src/routes/common"));

connectDB();
