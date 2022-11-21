const express = require("express");
const routes = express.Router();
const userRouter = require("./user.router");
const productRouter = require("./product.router");

routes.use("/users", userRouter.routes)
routes.use("/product", productRouter.routes);

module.exports = { routes };
