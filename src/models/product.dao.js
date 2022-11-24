const { appDataSource } = require("./data-source");

const getProducts = async (whereByGenderScent, orderByClause, limitClause) => {
  const products = await appDataSource.query(
    `
    SELECT
      p.id as productId, 
      po.id as productOptionId, 
      p.name_en as enName,
      p.name_ko koName,
      po.price,
      sc.name as scent,
      s.name as size,
      p.created_at,
      g.name as gender,
      po.image_url as imgUrl
    FROM products p
    INNER JOIN product_options po ON p.id = product_id
    INNER JOIN sizes s ON s.id = size_id
    INNER JOIN scents sc ON p.scent_id = sc.id
    INNER JOIN genders g ON p.gender_id = g.id
    ${whereByGenderScent} 
    ${orderByClause} 
    ${limitClause} 
    ;`
  );
  console.log(products)
  return products;
};

const getProductDetail = async (productId) => {
  const newProducts = await appDataSource.query(
    `SELECT
      p.id as productId,
      p.name_en as enName,
      p.name_ko koName,
      sc.name as scent,
      g.name as gender,
      JSON_ARRAYAGG(
        JSON_OBJECT(
          "productOptionId", po.id, 
          "img", po.image_url,
          "size", s.name,
          "price", po.price
        )
      ) as options,
      p.created_at,
      p.content,
      p.ingredient,
      p.manual
    FROM products p
    INNER JOIN product_options po ON p.id = product_id
    INNER JOIN sizes s ON s.id = size_id
    INNER JOIN scents sc ON p.scent_id = sc.id
    INNER JOIN genders g ON p.gender_id = g.id
    WHERE p.id = ?`
    ,[ productId ]
  );
  return newProducts;
};

module.exports = { getProducts, getProductDetail }
