const express = require("express");

const productController = require("../controllers/product.controller");
const routes = express.Router();

routes.get("/new", productController.getNewProducts);

module.exports = { routes };
