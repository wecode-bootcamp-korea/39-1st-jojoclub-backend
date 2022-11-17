const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userDao = require("../models/user.dao");
const { validateEmail } = require("../utils/validators");

const signUp = async (name, email, password, phoneNumber, address) => {
  validateEmail(email);

  const user = await userDao.getUserByEmail(email);

  if (user) {
    const err = new Error(`duplicated eamil`);
    err.statusCode = 400;
    throw err;
  }

  const hashedPassword = await bcrypt.hash(password, 8);
  await userDao.createUser(name, email, hashedPassword, phoneNumber, address);
};

const signIn = async (email, password) => {
  const user = await userDao.getUserByEmail(email);

  if (!user) {
    const err = new Error("specified user does not exist");
    err.statusCode = 404;
    throw err;
  }
  const result = await bcrypt.compare(password, user.password);

  if (!result) {
    const err = new Error("invalid password");
    err.statusCode = 401;
    throw err;
  }

  return jwt.sign({ sub: user.id }, process.env.JWT_SECRET);
};
module.exports = { signUp, signIn };
