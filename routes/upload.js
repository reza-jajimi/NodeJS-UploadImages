const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../middleware/uploadMiddleware");
const productController = require("../controllers/product-controller");

// Upload route
router.post("/upload", uploadMiddleware, productController.postProduct);

module.exports = router;
