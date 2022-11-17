const express = require("express");
const routes = express.Router();
const userController = require("../controllers/user.controller");

routes.post("/signup", userController.signUp);
routes.post("/signin", userController.signIn);

module.exports = { routes };
