const cartDao = require("../models/cart.dao")

const signUp = async (quantitiy, userId, productOptionId) => {
  await cartDao.createCart(quantitiy, userId, productOptionId);
};

module.exports = {signUp}