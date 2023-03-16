const express = require("express");
const { dirname } = require("path");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.render(path.join("pages", "ContactUs"), { Title: "ContactUs" });
});

module.exports = router;
