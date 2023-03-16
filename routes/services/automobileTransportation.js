const express = require("express");
const router = express.Router();
const path = require("path");



router.get("/", (req, res) => {
  res.render(path.join("pages/services", "automobileTransportation"), { Title: "Automobile Transportaion" });
});

module.exports = router;
