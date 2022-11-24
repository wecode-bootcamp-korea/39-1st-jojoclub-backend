const express = require("express");
const routes = express.Router();
const orderController = require("../controllers/order.controller");
const {verifyToken} = require("../utils/verifyToken")

<<<<<<< HEAD
routes.get("", verifyToken, orderController.getOrder);
=======
routes.post("", verifyToken, orderController.createOrder);
>>>>>>> main

module.exports = { routes };