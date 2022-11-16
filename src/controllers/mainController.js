const { returnMainPageProducts } = require("../models/main.dao");

const getMainProducs = async (req, res) => {
  try {
    res.status(200).json(await returnMainPageProducts());
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = { getMainProducs };
