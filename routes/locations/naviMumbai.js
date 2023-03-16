const express = require("express");
const router = express.Router();
const path = require("path");



router.get("/", (req, res) => {
  res.render(path.join("pages/locations", "naviMumbai"), { Title: "Packers and Movers in Navi Mumbai" });
});

module.exports = router;
