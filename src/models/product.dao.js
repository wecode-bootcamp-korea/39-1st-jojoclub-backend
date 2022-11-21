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
    ORDER BY ${orderBy} limit ${limitNum};
    `
  );
  return newProducts;
};

const getAllProducts = async (filteringByGenderQuery, filteringByScentQuery) => {
  console.log(filteringByGenderQuery);
  const getAllProducts1 = 
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
  const getAllProducts2 = 
    ` GROUP BY p.id `
  const result = getAllProducts1 + filteringByGenderQuery + filteringByScentQuery + getAllProducts2;
  const allProducts = await appDataSource.query(
    `${result}`
  );
  console.log(allProducts)
  return allProducts;
};

const getProduct = async (productId) => {
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

const getAllProductsByScent = async (scentId, orderBy) => {
  const allProducts = await appDataSource.query(
    `
    SELECT
      p.name_en as enName,
      p.name_ko koName,
      JSON_ARRAYAGG(
        JSON_OBJECT(
          "img", po.image_url,
          "size", s.name,
          "price", po.price
        )
      ) as options,
      p.created_at,
      sc.name as scent,
      g.name as gender
    FROM products p
    INNER JOIN scents sc ON p.scent_id = sc.id
    INNER JOIN genders g ON p.gender_id = g.id
    INNER JOIN product_options po ON p.id = product_id
    INNER JOIN sizes s ON s.id = size_id
    WHERE sc.id = ${scentId}
    GROUP BY p.id
    ORDER BY ?;
    `,
    [orderBy]
  );
  return allProducts;
};

module.exports = {
  getNewProducts,
  getAllProducts,
  getProduct,
  getAllProductsByScent,
};
