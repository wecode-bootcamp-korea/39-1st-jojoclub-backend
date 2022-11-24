const orderDao = require("../models/order.dao")

const createOrder = async (productOptionId, quantity, totalPrice, userId) => {
  return await orderDao.createOrder(productOptionId, quantity, totalPrice, userId);
};

module.exports = {createOrder}