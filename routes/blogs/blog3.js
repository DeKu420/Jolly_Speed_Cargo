const express = require("express");
const router = express.Router();
const path = require("path");



router.get("/", (req, res) => {
  res.render(path.join("pages/blogs", "blog3"), { Title: "Blog 3" });
});

module.exports = router;
