const productService = require("../services/product.service");

const getNewProducts = async (req, res) => {
  try {
    const { limitNum } = req.params;
    res.status(200).json(await productService.getNewProducts(limitNum));
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    res.status(200).json(await productService.getProducts());
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    if (!productId) {
      return res.status(400).json({ message: "KEY_ERROR" });
    }

    res.status(200).json(await productService.getProduct(productId));
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const getAllProductsByScent = async (req, res) => {
  try {
    const { scentId } = req.params;
    if (!scentId) {
      return res.status(400).json({ message: "KEY_ERROR" });
    }

    res.status(200).json(await productService.getAllProductsByScent(scentId));
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  getNewProducts,
  getAllProducts,
  getProduct,
  getAllProductsByScent,
};
