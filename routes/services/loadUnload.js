const express = require("express");
const router = express.Router();
const path = require("path");



router.get("/", (req, res) => {
  res.render(path.join("pages/services", "loadUnload"), { Title: "Loading and Unloading Service" });
});

module.exports = router;
