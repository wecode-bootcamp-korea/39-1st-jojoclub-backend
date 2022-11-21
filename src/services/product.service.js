const productDao = require("../models/product.dao");

const getNewProducts = async (orderBy, limitNum) => {
  return await productDao.getNewProducts(orderBy, limitNum);
};
//filteringByGender
const getAllProducts = async (gender, scent, priceRange) => {
  function filteringByGender (selectedGenders) {
    if(!selectedGenders){
      return ""
    }
    let maleChecked = selectedGenders.includes("male") && !selectedGenders.includes("female") && !selectedGenders.includes("unisex");
    let femaleChecked = !selectedGenders.includes("male") && selectedGenders.includes("female") && !selectedGenders.includes("unisex");
    let unisexChecked = !selectedGenders.includes("male") && !selectedGenders.includes("female") && selectedGenders.includes("unisex");
    let maleFemaleChecked = selectedGenders.includes("male") && selectedGenders.includes("female") && !selectedGenders.includes("unisex");
    let maleUnisexChecked = selectedGenders.includes("male") && !selectedGenders.includes("female") && selectedGenders.includes("unisex");
    let femaleUnisexChecked = !selectedGenders.includes("male") && selectedGenders.includes("female") && selectedGenders.includes("unisex");
  
    let filterByGender = "";
    if (maleChecked) {
      filterByGender = ` WHERE g.name = 'male' `;
    } else if (femaleChecked) {
      filterByGender = ` WHERE g.name = 'female' `;
    } else if (unisexChecked) {
      filterByGender = ` WHERE g.name = 'unisex' `;
    } else if (maleFemaleChecked) {
      filterByGender = ` WHERE g.name = 'male' OR g.name = 'female' `;
    } else if (maleUnisexChecked) {
      filterByGender = ` WHERE g.name = 'male' OR g.name = 'unisex' `;
    } else if (femaleUnisexChecked) {
      filterByGender = ` WHERE g.name = 'female' OR g.name = 'unisex' `;
    } else {
      filterByGender = "";
    }
    return filterByGender
  }
  
  let filteringByGenderQuery = filteringByGender(gender)

  //filteringByScent
  function filteringByScent (selectedScent) {
    if(!selectedScent){
      return ""
    }
    let citrusChecked = selectedScent.includes("citrus");
    let fruityChecked = selectedScent.includes("fruity");
    let lightfloralChecked = selectedScent.includes("lightfloral");
    let floralChecked = selectedScent.includes("floral");
    let spicyChecked = selectedScent.includes("spicy");

    let filterByScent = "";
    if (citrusChecked) {
      filterByScent = ` WHERE sc.name = 'citrus' `;
    } else if (fruityChecked) {
      filterByScent = ` WHERE sc.name = 'fruity' `;
    } else if (lightfloralChecked) {
      filterByScent = ` WHERE sc.name = 'lightfloral' `;
    } else if (floralChecked) {
      filterByScent = ` WHERE sc.name = 'floral' `;
    } else if (spicyChecked) {
      filterByScent = ` WHERE sc.name = 'spicy' `;
    } else {
      filterByScent = "";
    }
    return filterByScent
  }
  
  let filteringByScentQuery = filteringByScent(scent)

  //filteringByPrice
  function filteringByPrice (selectedPriceRange) {
    if(!selectedPriceRange){
      return ""
    }
    let priceRange0_10 = selectedPriceRange.includes("0-10");
    let priceRange11_20 = selectedPriceRange.includes("11-20");
    let priceRange21_30 = selectedPriceRange.includes("21-30");
    let priceRange31_max = selectedPriceRange.includes("31-max");
  
    let filterByPriceRange = "";
    if (priceRange0_10) {
      filterByPriceRange = ` HAVING po.price > 0 AND po.price <= 100000 `;
    } else if (priceRange11_20) {
      filterByPriceRange = ` HAVING po.price > 100000 AND po.price <= 200000 `;
    } else if (priceRange21_30) {
      filterByPriceRange = ` HAVING po.price > 200000 AND po.price <= 300000 `;
    } else if (priceRange31_max) {
      filterByPriceRange = ` HAVING po.price > 300000 `;
    } else {
      filterByPriceRange = "";
    }
    return filterByPriceRange
  }
  let filteringByPriceRangeQuery = filteringByPrice(priceRange)
  console.log(filteringByScentQuery)
  return await productDao.getAllProducts(filteringByGenderQuery, filteringByPriceRangeQuery, filteringByScentQuery);
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
