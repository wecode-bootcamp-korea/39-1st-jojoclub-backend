const express = require("express");
const routes = express.Router();
const cartsRouter = require("./carts.router");

routes.use("/carts", cartsRouter.routes);

module.exports = { routes };
