const { getProducts } = require("../models/product.dao");

const productService = async () => {
  return await getProducts();
};

module.exports = { productService };
