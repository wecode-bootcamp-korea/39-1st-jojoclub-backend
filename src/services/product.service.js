const productDao = require("../models/product.dao");

const getNewProducts = async (orderBy, limitNum) => {
  return await productDao.getNewProducts(orderBy, limitNum);
};

module.exports = { getNewProducts }
