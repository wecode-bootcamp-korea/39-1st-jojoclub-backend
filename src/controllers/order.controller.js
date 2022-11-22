const ordersService = require("../services/order.service");
const { catchAsync } = require("../utils/error");

const createOrder = catchAsync(async (req, res) => {
  const {orderId, orderStatusId, orderItemStatusId, productOptionId, quantity} = req.body;
  const userId = req.user.id;

  if (!orderId || !orderStatusId || !userId || !orderItemStatusId || !productOptionId || !quantity) {
    const err = new Error("KEY_ERROR");
    err.statusCode = 400;
    throw err;
  }

  await ordersService.createOrder(orderId, orderStatusId, userId, orderItemStatusId, productOptionId, quantity);

  return res.status(201).json({
    message: "POST_SUCCESS",
  });
});

module.exports = { createOrder };
