const productDao = require("../models/product.dao");

const getNewProducts = async (limitNum) => {
  return await productDao.getNewProducts(limitNum);
};

const getProducts = async () => {
  return await productDao.getAllProducts();
};

const getProduct = async (productId) => {
  return await productDao.getProduct(productId);
};

const getAllProductsByScent = async (scentId) => {
  return await productDao.getsAllProductsByScent(scentId);
};

module.exports = {
  getNewProducts,
  getProducts,
  getProduct,
  getAllProductsByScent,
};
