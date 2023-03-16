const express = require("express");
const router = express.Router();
const path = require("path");



router.get("/", (req, res) => {
  res.render(path.join("pages/blogs", "blog4"), { Title: "Blog 4" });
});

module.exports = router;
