const { body } = require("express-validator");

module.exports.registerValidations = [
  body("name")
    .not()
    .isEmpty()
    .trim()
    .escape()
    .withMessage("Name is required!!"),
  body("email")
    .isEmail()
    .normalizeEmail()
    .trim()
    .escape()
    .withMessage("Valid email is required!!"),
  body("password")
    .isLength({ min: 5, max: 20 })
    .trim()
    .withMessage(
      "Password must be of alteast 5 and maximin 20 characters long!!"
    ),
];

module.exports.loginValidations = [
  body("email")
    .isEmail()
    .normalizeEmail()
    .trim()
    .escape()
    .withMessage("Valid email is required!!"),
  body("password").not().isEmpty().withMessage("Password is Required"),
];
