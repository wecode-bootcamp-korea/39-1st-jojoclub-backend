const express = require("express");
const routes = express.Router();
const orderController = require("../controllers/order.controller");
const {verifyToken} = require("../utils/verifyToken")

routes.get("", verifyToken, orderController.getOrder);

module.exports = { routes };