const productDao = require("../models/product.dao");

const getProducts = async (gender, scent, orderBy, offset, limitNum) => {
  const whereParams ={gender, scent};
  const scentFilterBuilder = (value) => { 
    if(!value)return "";
    return `sc.name IN ('${  value.join("\', \'")  }')`; 
  }; 

  const genderFilterBuilder = (value) => { 
    if(!value)return "";
    return `g.name IN ('${  value.join("\', \'")  }')`; 
  }; 
  const makeProductQueryBuilders = (params) => { 
    const builderSet = { 
        "gender": genderFilterBuilder, 
        "scent": scentFilterBuilder 
    }; 
    let whereClauses = Object.entries(params).map( ([key, value]) => builderSet[key](value) ); 
    whereClauses = whereClauses.filter(el => el !== '')
    return `WHERE ${whereClauses.join(' AND ')}`;
  }; 
  
  const orderByQuery = (orderBySelected) => {
    if(!orderBySelected){ return "";}
    return `ORDER BY ${orderBySelected}`;
  }
  const limitQuery = (limitNumSelected, offsetSelected) => {
    if(!limitNumSelected){ return "";}
    return `LIMIT ${limitNumSelected} ${offsetQuery(offsetSelected)}`;
  }
  const offsetQuery = (offsetSelected) => {
    if(!offsetSelected){ return "";}
    return `OFFSET ${offsetSelected}`;
  }
  let whereClause = makeProductQueryBuilders(whereParams)
  let orderByClause = orderByQuery(orderBy);
  let limitClause = limitQuery(limitNum, offset);
  return await productDao.getProducts(whereClause, orderByClause, limitClause);
};

const getProductDetail = async (productId) => {
  return await productDao.getProductDetail(productId);
};

module.exports = { getProducts, getProductDetail }
