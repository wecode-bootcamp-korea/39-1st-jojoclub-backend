const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userDao = require("../models/user.dao");
const { validateEmail, validatePw } = require("../utils/validators");
const models = require("../models/user.dao")

const signUp = async (name, email, password, phoneNumber) => {
  validateEmail(email);
  validatePw(password);

  const user = await userDao.getUserByEmail(email);
  if (user) {
    const err = new Error(`duplicated eamil`);
    err.statusCode = 400;
    throw err;
  }

  const hashedPassword = await bcrypt.hash(password, 8);
  await userDao.createUser(name, email, hashedPassword, phoneNumber);
};

const signIn = async (email, password) => {
  validatePw(password);

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

const modifyAddress = async (userId, address) => {

  await userDao.modifyAddress(userId, address);
};

module.exports = { signUp, signIn, modifyAddress };
