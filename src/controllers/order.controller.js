const ordersService = require("../services/order.service");
const { catchAsync } = require("../utils/error");

const createOrder = catchAsync(async (req, res) => {

  const { productOptionId, quantity, totalPrice} = req.body;
  const userId = req.user.id;

  if (!productOptionId || !quantity || !totalPrice || !userId) {
    const err = new Error("KEY_ERROR");
    err.statusCode = 400;
    throw err;
  }

  await ordersService.createOrder(productOptionId, quantity, totalPrice, userId);

  return res.status(201).json({
    message: "POST_SUCCESS",
  });
});

module.exports = { createOrder };
