const express = require("express");
const router = express.Router();
const path = require("path");



router.get("/", (req, res) => {
  res.render(path.join("pages/locations", "thane"), { Title: "Packers and Movers in Thane" });
});

module.exports = router;
