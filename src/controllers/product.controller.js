const { productService } = require("../services/product.service");

const getProducts = async (req, res) => {
  try {
    res.status(200).json(await productService());
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = { getProducts };
