const cartDao = require("../models/cart.dao")

const createCarts = async (quantity, userId, productOptionId) => {
  await cartDao.createCart(quantity, userId, productOptionId);
};

const getCarts = async (userId) => {
  return await cartDao.getCarts(userId);
};

const updateCarts = async (cartsId, quantity) => {
  return await cartDao.updateCart(cartsId, quantity);
};

const deleteCarts = async (cartsId) => {
  return await cartDao.deleteCart(cartsId);
};

module.exports = {createCarts, updateCarts, deleteCarts, getCarts}