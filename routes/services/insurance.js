const express = require("express");
const router = express.Router();
const path = require("path");



router.get("/", (req, res) => {
  res.render(path.join("pages/services", "insurance"), { Title: "Insurance" });
});

module.exports = router;
