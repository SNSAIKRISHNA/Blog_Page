const express = require('express');
const router = express.Router();
const{ renderHomePage, renderLoginPage} =  require("../controllers/staticController");

router.get("/", renderHomePage);

router.get("/login", renderLoginPage);

module.exports = router;