const express = require("express");

const productController = require("../controllers/product.controller");
const routes = express.Router();

routes.get("/new", productController.getNewProducts);
routes.get("/all", productController.getAllProducts);
routes.get("/:productId", productController.getProduct);
routes.get("/scent/:scentId", productController.getAllProductsByScent);

module.exports = { routes };
