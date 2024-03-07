const { mongoose } = require("mongoose");

function connectDB() {
  try {
    mongoose.connect(
      "mongodb+srv://test1:test1@cluster0.m4t5d2m.mongodb.net/Cluster0?retryWrites=true&w=majority",
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
