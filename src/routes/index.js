const express = require("express");
const routes = express.Router();
const userRouter = require("./user.router");
const cartsRouter = require("./carts.router");

routes.use("/users", userRouter.routes);
routes.use("/carts", cartsRouter.routes);

module.exports = { routes };
