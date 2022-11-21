const express = require("express");
const routes = express.Router();
// const productRouter = require("./product.router");
const userRouter = require("./user.router");

// routes.use("/product", productRouter.routes);
routes.use("/users", userRouter.routes);

module.exports = { routes };
