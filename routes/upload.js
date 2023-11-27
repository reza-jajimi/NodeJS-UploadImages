const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../middleware/uploadMiddleware");
const postProperty = require("../controllers/product-controller");

// Upload route
router.post("/upload", uploadMiddleware, postProperty);

module.exports = router;
