const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

// get driver connection
const dbo = require("./db/conn");
dbo.connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server Listening on Port ${PORT}`);
        });
    })
    .catch(console.log);
