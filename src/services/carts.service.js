const cartDao = require("../models/cart.dao")

const signUp = async (quantity, userId, productOptionId) => {
  await cartDao.createCart(quantity, userId, productOptionId);
};

module.exports = {signUp}