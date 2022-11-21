const express = require("express");
const routes = express.Router();
const productRouter = require("./product.router");

routes.use("/product", productRouter.routes);

module.exports = { routes };
