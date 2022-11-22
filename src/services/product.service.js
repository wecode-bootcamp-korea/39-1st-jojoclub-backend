const productDao = require("../models/product.dao");

const getNewProducts = async (orderBy, limitNum) => {
  return await productDao.getNewProducts(orderBy, limitNum);
};

const getProduct = async (productId) => {
  return await productDao.getProduct(productId);
};

module.exports = { getNewProducts, getProduct }
