const ordersService = require("../services/order.service");
const { catchAsync } = require("../utils/error");

const getOrder = catchAsync(async (req, res) => {
  const {orderStatusId} = req.body;
  const userId = req.user.id;

  if (!orderStatusId) {
    const err = new Error("KEY_ERROR");
    err.statusCode = 400;
    throw err;
  }

  await ordersService.getOrder(orderStatusId, userId);

  return res.status(200).json({
    message: "POST_SUCCESS",
  });
});

module.exports = { getOrder };
