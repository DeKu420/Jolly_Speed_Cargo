const express = require("express");
const router = express.Router();
const path = require("path");



router.get("/", (req, res) => {
  res.render(path.join("pages/locations", "kerala"), { Title: "Packers and Movers in Kerala" });
});

module.exports = router;
