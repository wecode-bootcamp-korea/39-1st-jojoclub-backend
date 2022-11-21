const express = require("express");
const routes = express.Router();
const userController = require("../controllers/user.controller");
const {verifyToken} = require("../utils/verifyToken")

routes.post("/signup", userController.signUp);
routes.post("/signin", userController.signIn);
routes.patch("/address", verifyToken, userController.modifyAddress);

module.exports = { routes };
