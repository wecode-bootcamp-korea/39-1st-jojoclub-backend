const express = require("express");
const routes = express.Router();
const cartsController = require("../controllers/user.controller");
const {verifyToken} = require("../utils/verifyToken")

routes.post("/", cartsController.signUp);
routes.delete("/", userController.delete);
routes.patch("/", verifyToken, userController.modifyAddress);

module.exports = { routes };