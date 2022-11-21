const express = require("express");

const userRouter = require("./user.router");
const cartsRouter = require("./carts.router");

const routes = express.Router();

routes.use("/carts", cartsRouter.routes);
routes.use("/users", userRouter.routes);

module.exports = { routes };
