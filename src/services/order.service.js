const orderDao = require("../models/order.dao")

const createOrder = async (orderStatusId, userId) => {
  return await orderDao.createOrder(orderStatusId, userId);
};

module.exports = {createOrder}