const cartDao = require("../models/cart.dao")

const createCarts = async (quantity, userId, productOptionId) => {
  await cartDao.createCart(quantity, userId, productOptionId);
};

const getCarts = async (cartsId, quantity) => {
  await cartDao.getCart(cartsId, quantity);
};

const updateCarts = async (cartsId, quantity) => {
  await cartDao.updateCart(cartsId, quantity);
};

const deleteCarts = async (cartsId) => {
  await cartDao.deleteCart(cartsId);
};

module.exports = {createCarts, updateCarts, deleteCarts, getCarts}