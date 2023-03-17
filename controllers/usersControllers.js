const { validationResult } = require("express-validator");
const { create } = require("../models/user");
const UserModel = require("../models/user");
const {
  hashedPassword,
  createToken,
  comparePassword,
} = require("../services/authServices");

// @route POST /api/register
// @access Public
// @desc Create user and return a token
module.exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { name, email, password } = req.body;
    try {
      const emailExist = await UserModel.findOne({ email });
      if (!emailExist) {
        const hashed = await hashedPassword(password);
        const user = await UserModel.create({
          name,
          email,
          password: hashed,
        });
        const token = createToken({
          id: user._id,
          name: user.name,
          admin: user.admin,
        });
        return res
          .status(201)
          .json({ msg: "Your account has been created!!", token });
      } else {
        // email exists
        return res
          .status(400)
          .json({
            errors: [{ msg: `${email} already exists!!`, param: "email" }],
          });
      }
    } catch (error) {
      console.log(error.message);
      return res.status(500).json("Server internal error!!");
    }
  } else {
    // Failed Validation
    return res.status(400).json({ errors: errors.array() });
  }
};

// @route POST /api/login
// @access Public
// @desc login user and return a token
module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    try {
      const user = await UserModel.findOne({ email });
      if (user) {
        if (await comparePassword(password, user.password)) {
          const token = createToken({
            id: user._id,
            name: user.name,
            admin: user.admin,
          });
          if (user.admin) {
            return res.status(201).json({ token, admin: true });
            // res.redirect("/admin");
          } else {
            return res.status(201).json({ token, admin: false });
          }
        } else {
          return res
            .status(400)
            .json({
              errors: [{ param: "password", msg: "Incorrect Password!!" }],
            });
        }
      } else {
        return res
          .status(400)
          .json({ errors: [{ param: "email", msg: `${email} is not found` }] });
      }
    } catch (error) {
      console.log(error.message);
      return res.status(500).json("Server internal error!!");
    }
  } else {
    // validation failed
    return res.status(400).json({ errors: errors.array() });
  }
};
