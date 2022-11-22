const { appDataSource } = require("./data-source");

const getNewProducts = async (orderBy, limitNum) => {
  const newProducts = await appDataSource.query(
    `
    SELECT 
      products.name_en as enName,
      products.name_ko koName,
      product_options.price,
      sizes.name as size,
      products.created_at
    FROM products INNER JOIN product_options 
    ON products.id = product_id INNER JOIN sizes ON sizes.id = size_id
    ORDER BY ? limit ?;
    `,[ orderBy, limitNum ]
  );
  return newProducts;
};

const getAllProducts = async (combineAllFilter) => {
  const tableQuary = 
    `SELECT
      p.name_en as enName,
      p.name_ko koName,
      sc.name as scent,
      g.name as gender,
      JSON_ARRAYAGG(
        JSON_OBJECT(
          "img", po.image_url,
          "size", s.name,
          "price", po.price
        )
      ) as options,
      p.created_at
    FROM products p
    INNER JOIN product_options po ON p.id = product_id
    INNER JOIN sizes s ON s.id = size_id
    INNER JOIN scents sc ON p.scent_id = sc.id
    INNER JOIN genders g ON p.gender_id = g.id `
  const groupBy = 
    ` GROUP BY p.id `
  const result = tableQuary + combineAllFilter + groupBy;
  const allProducts = await appDataSource.query(
    `${result}`
  );
  return allProducts;
};

module.exports = { getNewProducts, getAllProducts }
