const { mongoose } = require("mongoose");

function connectDB(url) {
  console.log(url);
  try {
    mongoose.connect(
      url
    );

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to mongo", error);
  }
}

mongoose.connection.on("error", (error) => {
  console.error(`Error → : ${error.message}`);
});

module.exports = { connectDB };
