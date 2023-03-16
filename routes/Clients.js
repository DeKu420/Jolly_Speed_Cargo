const express = require("express");
const { dirname } = require("path");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.render(path.join("pages", "Clients"), { Title: "Clients" });
});

module.exports = router;
