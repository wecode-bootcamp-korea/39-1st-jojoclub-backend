const express = require("express");
const routes = express.Router();
const cartsController = require("../controllers/carts.controller");
const {verifyToken} = require("../utils/verifyToken")

routes.post("/", verifyToken, cartsController.signUp);
// routes.delete("/", userController);
// routes.patch("/", verifyToken, cartsController);

module.exports = { routes };