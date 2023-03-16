const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const { JWT_SECRET } = require("../config/envConfig");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

module.exports.hashedPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);
  return hashed;
};

module.exports.createToken = (user) => {
  return jwt.sign(user, JWT_SECRET, {
    expiresIn: "7d",
  });
};

module.exports.comparePassword = async (password, dbpassword) => {
  return await bcrypt.compare(password, dbpassword);
};
