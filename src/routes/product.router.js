const express = require("express");

const productController = require("../controllers/product.controller");
const routes = express.Router();

routes.get("/new", productController.getNewProducts);
routes.get("/:productId", productController.getProduct);

module.exports = { routes };
