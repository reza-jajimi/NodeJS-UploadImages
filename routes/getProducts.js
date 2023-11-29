const express = require("express");
const router = express.Router();
const productController = require("../controllers/product-controller");

// Get products route
router.get("/products", productController.getProducts);

module.exports = router;
