const orderDao = require("../models/order.dao")

const getOrder = async (userId) => {
  return await orderDao.getOrders(userId);
};

module.exports = {getOrder}