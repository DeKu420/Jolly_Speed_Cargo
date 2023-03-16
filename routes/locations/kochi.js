const express = require("express");
const router = express.Router();
const path = require("path");



router.get("/", (req, res) => {
  res.render(path.join("pages/locations", "kochi"), { Title: "Packers and Movers in Kochi" });
});

module.exports = router;
