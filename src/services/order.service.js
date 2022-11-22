const orderDao = require("../models/order.dao")

const createOrder = async (orderId, orderStatusId, userId, orderItemStatusId, productOptionId, quantity, totalPrice) => {
  return await orderDao.createOrder(orderId, orderStatusId, userId, orderItemStatusId, productOptionId, quantity, totalPrice);
};

module.exports = {createOrder}