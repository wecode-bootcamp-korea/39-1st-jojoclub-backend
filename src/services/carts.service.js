const cartDao = require("../models/cart.dao")

const createCarts = async (quantity, userId, productOptionId) => {
  await cartDao.createCart(quantity, userId, productOptionId);
};

const updateCarts = async (cartsId, quantity) => {
  await cartDao.updateCarts(cartsId, quantity);
};

const deleteCarts = async (cartsId) => {
  await cartDao.deleteCarts(cartsId);
};

module.exports = {createCarts, updateCarts, deleteCarts}