const express = require("express");
const routes = express.Router();
const productController = require("../controllers/product.controller");

routes.get("", productController.getProducts);
routes.get("/:productId", productController.getProductDetail);

module.exports = { routes };