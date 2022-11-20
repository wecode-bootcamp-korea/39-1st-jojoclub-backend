const productService = require("../services/product.service");
const { catchAsync } = require("../utils/error");

const getNewProducts = catchAsync(async (req, res) => {
  const orderBy = req.query.orderBy;
  const limitNum = req.query.limitNum;
  res.status(200).json(await productService.getNewProducts(orderBy, limitNum));
});

const getAllProducts = catchAsync(async (req, res) => {
  const { gender, scent, priceRange } = req.query;
  res
    .status(200)
    .json(await productService.getAllProducts(gender, scent, priceRange));
});

const getProduct = catchAsync(async (req, res) => {
  const productId = req.params;
  if (!productId) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }

  res.status(200).json(await productService.getProduct(productId));
});

const getAllProductsByScent = catchAsync(async (req, res) => {
  const { scentId } = req.params;
  const orderBy = req.query.orderBy;
  if (!scentId) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }

  res
    .status(200)
    .json(await productService.getAllProductsByScent(scentId, orderBy));
});

module.exports = {
  getNewProducts,
  getAllProducts,
  getProduct,
  getAllProductsByScent,
};
