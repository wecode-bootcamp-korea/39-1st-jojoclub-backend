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

module.exports = { getNewProducts }
