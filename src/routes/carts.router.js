const express = require("express");
const routes = express.Router();
const cartsController = require("../controllers/carts.controller");
const {verifyToken} = require("../utils/verifyToken")

routes.post("", verifyToken, cartsController.createCarts);
routes.get("", verifyToken, cartsController.getCarts);
routes.patch("", verifyToken, cartsController.updateCarts);
routes.delete("", verifyToken, cartsController.deleteCarts);

module.exports = { routes };