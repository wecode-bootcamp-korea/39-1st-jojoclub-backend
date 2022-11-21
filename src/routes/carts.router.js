const express = require("express");
const routes = express.Router();
const cartsController = require("../controllers/carts.controller");

routes.post("", cartsController.createCarts);
// routes.delete("/", userController);
// routes.patch("/", verifyToken, cartsController);

module.exports = { routes };