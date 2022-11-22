const express = require("express");
const routes = express.Router();
const ordersController = require("../controllers/orders.controller");
const {verifyToken} = require("../utils/verifyToken")

routes.post("", verifyToken, ordersController.createOrders);
routes.get("", verifyToken, ordersController);


module.exports = { routes };