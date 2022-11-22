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

const getProduct = async (productId) => {
  console.log('-------------')
  console.log(productId)
  console.log('-------------')
  const product = await appDataSource.query(
    `
    SELECT 
      p.id,
      p.thumbnail_img_url as thumbnail,
      p.name_en as enName,
      p.name_ko koName,
      JSON_ARRAYAGG(
        JSON_OBJECT(
          "img", po.image_url,
          "size", s.name,
          "price", po.price
        )
      ) as options
    FROM products p
    INNER JOIN product_options po ON po.product_id = p.id
    INNER JOIN sizes s ON s.id = po.size_id
    WHERE p.id = ?
    GROUP BY p.id;
    `,
    [productId]
  );
  return product;
};

module.exports = { getNewProducts, getProduct }
