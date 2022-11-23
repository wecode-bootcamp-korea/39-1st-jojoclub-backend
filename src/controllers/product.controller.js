const productService = require("../services/product.service");
const { catchAsync } = require("../utils/error");

const getProducts = catchAsync(async (req, res) => {
  const { gender, scent, orderBy, offset, limitNum } = req.query;
  console.log(gender, scent, orderBy, offset, limitNum);
  return res.status(200).json(await productService.getProducts(gender, scent, orderBy, offset, limitNum));
});

const getProductDetail = catchAsync(async (req, res) => {
  const { productId } = req.params;
  return res.status(200).json(await productService.getProductDetail(productId));
});

module.exports = { getProducts, getProductDetail }