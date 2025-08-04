const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  res.end("user is  under const");
});

module.exports = router;
