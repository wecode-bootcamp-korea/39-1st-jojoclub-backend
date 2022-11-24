const orderDao = require("../models/order.dao")

const getOrder = async (userId) => {
  return await orderDao.getOrders(userId);
};

module.exports = {}
const createOrder = async (productOptionId, quantity, totalPrice, userId) => {
  return await orderDao.createOrder(productOptionId, quantity, totalPrice, userId);
};

module.exports = {getOrder, createOrder}
