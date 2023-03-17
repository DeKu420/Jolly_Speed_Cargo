const express = require("express");
const {
  registerValidations,
  loginValidations,
} = require("../validations/userValidations");
const { register, login } = require("../controllers/usersControllers");
const UserModel = require("../models/user");
const router = express.Router();

router.post("/register", registerValidations, register);

router.post("/login", loginValidations, login);

router.get("/users", async (req,res)=>{
  try {
    let users = await UserModel.find();
    res.send(users);
  } catch (error) {
    res.send(error.message);
  }
})

module.exports = router;
