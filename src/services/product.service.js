const productDao = require("../models/product.dao");

const getNewProducts = async (orderBy, limitNum) => {
  return await productDao.getNewProducts(orderBy, limitNum);
};
//filteringByGender
const getAllProducts = async (gender, scent) => {

  const filterCombiner = (selectedGender, selectedScent) => {
    if(!selectedGender && !selectedScent){
      return "";
    }else if(!selectedGender && selectedScent){
      return `WHERE sc.name IN ("${selectedScent.join("\", \"")}")`
    }else if(selectedGender && !selectedScent){
      return `WHERE g.name IN ("${selectedGender.join("\", \"")}")`
    }else{
      return `WHERE g.name IN ("${selectedGender.join("\", \"")}") AND sc.name IN ("${selectedScent.join("\", \"")}")`
    }  
  }

  const filterCombinerQuery = filterCombiner(gender,scent)

  return await productDao.getAllProducts(filterCombinerQuery);
};

const getProduct = async (productId) => {
  return await productDao.getProduct(productId);
};

const getAllProductsByScent = async (scentId, orderBy) => {
  return await productDao.getAllProductsByScent(scentId, orderBy);
};

module.exports = {
  getNewProducts,
  getAllProducts,
  getProduct,
  getAllProductsByScent,
};
