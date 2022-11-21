const cartsService = require("../services/carts.service");
const { catchAsync } = require("../utils/error");

const signUp = catchAsync(async (req, res) => {
  const { quantitiy, productOptionId } = req.body;
  const userId = req.user.id;

  if (!quantitiy || !userId || !productOptionId) {
    const err = new Error("KEY_ERROR");
    err.statusCode = 400;
    throw err;
  }

  await cartsService.signUp(quantitiy, userId, productOptionId);

  return res.status(201).json({
    message: "SIGNUP_SUCCESS",
  });
});

module.exports = { signUp };
