const express = require("express");
const routes = express.Router();
const mainController = require("../controllers/mainController");

routes.get("/", mainController.getMainProducs);

module.exports = { routes };
