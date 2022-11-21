const jwt = require('jsonwebtoken')
const {catchAsync} = require("./error")
const userDao = require("../models/user.dao")

const verifyToken = catchAsync(async (req, res, next) => {
  const token = req.headers.authorization;

  if ( !token ) {
    const err = new Error("LOGIN_REQUIRED")
    err.statusCode = 400;
    throw err;
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const userId = decoded.sub
  const user = await userDao.getUserByUserId(userId);
  if (!user) {
    const err = new Error("USER_DOES_NOT_EXIST")
    err.statusCode = 400;
    throw err;
  }

  req.user = user;
  next()
});

module.exports = {verifyToken};