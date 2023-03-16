const express = require("express");
const router = express.Router();
const path = require("path");



router.get("/", (req, res) => {
  res.render(path.join("pages/blogs", "blog5"), { Title: "Blog 5" });
});

module.exports = router;
