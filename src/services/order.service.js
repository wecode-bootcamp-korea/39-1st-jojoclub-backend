const ordersDao = require("../models/orders.dao")

const createOrders = async (orderStatusId, userId) => {
  await ordersDao.createOrder(orderStatusId, userId);
};

module.exports = {createOrders}