const orderDao = require("../models/order.dao")

const createOrder = async (orderId, orderStatusId, userId, orderItemStatusId, productOptionId, quantity) => {
  return await orderDao.createOrder(orderId, orderStatusId, userId, orderItemStatusId, productOptionId, quantity);
};

module.exports = {createOrder}