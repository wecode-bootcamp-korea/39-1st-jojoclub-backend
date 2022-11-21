require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const { routes } = require("./src/routes");
const { globalErrorHandler } = require("./src/utils/error");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("combined"));
app.use(routes);
app.use(globalErrorHandler);

app.get("/ping", function (req, res) {
  return res.status(200).json({ message: "pong" });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Listening on Port ${PORT}");
});
