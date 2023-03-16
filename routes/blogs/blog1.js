const express = require("express");
const router = express.Router();
const path = require("path");



router.get("/", (req, res) => {
  res.render(path.join("pages/blogs", "blog1"), { Title: "Blog 1" });
});

module.exports = router;
