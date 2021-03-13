const express = require("express");
const path = require("path");

const router = express.Router();

const rootDir = require("../helpers/path");

router.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "src", "views", "home.html"));
});

module.exports = router;
