const orderDao = require("../models/order.dao")

<<<<<<< HEAD
const getOrder = async (userId) => {
  return await orderDao.getOrders(userId);
};

module.exports = {getOrder}
=======
const createOrder = async (productOptionId, quantity, totalPrice, userId) => {
  return await orderDao.createOrder(productOptionId, quantity, totalPrice, userId);
};

module.exports = {createOrder}
>>>>>>> main
