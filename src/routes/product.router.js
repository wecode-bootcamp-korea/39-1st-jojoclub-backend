const express = require("express");
const routes = express.Router();
const productController = require("../controllers/product.controller");

routes.get("/new/:limitNum", productController.getNewProducts);
routes.get("/all", productController.getAllProducts);
routes.get("/:productId", productController.getProduct);
routes.get("/scent/:scentId", productController.getAllProductsByScent);

module.exports = { routes };
