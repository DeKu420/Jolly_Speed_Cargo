const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Initializing
dotenv.config();

//DB Config
const connectToMongoDB = () => {
  try {
    const conn = mongoose.connect(process.env.DB_URL);
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectToMongoDB;
