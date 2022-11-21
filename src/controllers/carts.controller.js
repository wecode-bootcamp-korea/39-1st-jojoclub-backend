const cartsService = require("../services/carts.service");
const { catchAsync } = require("../utils/error");

const createCarts = catchAsync(async (req, res) => {
  const { quantity, productOptionId } = req.body;
  const userId = req.user.id;

  if (!quantity || !userId || !productOptionId) {
    const err = new Error("KEY_ERROR");
    err.statusCode = 400;
    throw err;
  }

  await cartsService.createCarts(quantity, userId, productOptionId);

  return res.status(201).json({
    message: "SIGNUP_SUCCESS",
  });
});

const updateCarts = catchAsync(async (req, res) => {
  const { cartsId, quantity } = req.body;

  if (!cartsId || !quantity ) {
    const err = new Error("KEY_ERROR");
    err.statusCode = 400;
    throw err;
  }

  await cartsService.updateCarts(cartsId, quantity);

  return res.status(201).json({
    message: "UPDATE_SUCCESS",
  });
});

const deleteCarts = catchAsync(async (req, res) => {
  const { cartsId } = req.body;

  if (!cartsId) {
    const err = new Error("KEY_ERROR");
    err.statusCode = 400;
    throw err;
  }

  await cartsService.deleteCarts(cartsId);

  return res.status(201).json({
    message: "DELETE_SUCCESS",
  });
});

module.exports = { createCarts, updateCarts, deleteCarts };
