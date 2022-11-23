const orderDao = require("../models/order.dao")
const orderDao = require("../models/order.dao")

const getOrder = async (orderStatusId, userId) => {
  return await orderDao.getOrders(orderStatusId, userId);
};

module.exports = {getOrder}