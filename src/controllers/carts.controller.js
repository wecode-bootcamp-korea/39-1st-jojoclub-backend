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

  await cartsService.signUp(quantity, userId, productOptionId);

  return res.status(201).json({
    message: "SIGNUP_SUCCESS",
  });
});

module.exports = { createCarts };
