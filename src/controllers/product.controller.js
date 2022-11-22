const productService = require("../services/product.service");
const { catchAsync } = require("../utils/error");

const getNewProducts = catchAsync(async (req, res) => {
  const { orderBy, limitNum } = req.query
  return res.status(200).json(await productService.getNewProducts(orderBy, limitNum));
});

const getProduct = catchAsync(async (req, res) => {
  const {productId} = req.params;
  if (!productId) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }

  return res.status(200).json(await productService.getProduct(productId));
});

module.exports = { getNewProducts, getProduct }