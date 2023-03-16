const express = require("express");
const router = express.Router();
const path = require("path");



router.get("/", (req, res) => {
  res.render(path.join("pages/blogs", "blog2"), { Title: "Blog 2" });
});

module.exports = router;
