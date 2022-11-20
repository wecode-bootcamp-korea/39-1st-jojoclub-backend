const userService = require("../services/user.service");
const { catchAsync } = require("../utils/error");

const signUp = catchAsync(async (req, res) => {
  const { name, email, password, phoneNumber } = req.body;

  if (!name || !email || !password || !phoneNumber) {
    const err = new Error("KEY_ERROR");
    err.statusCode = 400;
    throw err;
  }

  await userService.signUp(name, email, password, phoneNumber);

  return res.status(201).json({
    message: "SIGNUP_SUCCESS",
  });
});

const signIn = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  if ( !email || !password ) {
    const err = new Error("KEY_ERROR");
    err.statusCode = 400;
    throw err;
  }

  const accessToken = await userService.signIn(email, password);

  res.status(200).json({ accessToken: accessToken });
});

const modifyAddress = catchAsync(async (req, res) => {
  const userId = req.user.id
  const { address } = req.body;

  if (!userId || !address) {
    const err = new Error("KEY_ERROR");
    err.statusCode = 400;
    throw err;
  }

  await userService.modifyAddress(userId, address);

  return res.status(201).json({
    message: "ADDRESS_SIGNUP_SUCCESS",
  });
});

module.exports = { signUp, signIn, modifyAddress };
