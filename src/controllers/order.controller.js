const ordersService = require("../services/order.service");
const { catchAsync } = require("../utils/error");

const getOrder = catchAsync(async (req, res) => {
  const userId = req.user.id;
  return res.status(200).json(await ordersService.getOrder(userId));
});

module.exports = { getOrder };
