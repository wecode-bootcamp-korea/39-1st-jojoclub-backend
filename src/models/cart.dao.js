const { appDataSource } = require("./data-source");

const createCart = async (quantity, userId, productOptionId) => {
  return await appDataSource.query(
    `
    INSERT INTO carts (
      quantity,
      user_id,
      product_option_id
    ) VALUES (
      ?,
      ?,
      ?
    );
    `,
    [quantity, userId, productOptionId]
  );
};

const getCarts = async (userId) => {
  const cart = await appDataSource.query(
    `
    SELECT 
      u.id as userNum,
      c.id as cartsNum,
      po.image_url,
      p.name_ko,
      p.name_en,
      s.name as size,
      po.price,
      c.quantity
    FROM products p
    INNER JOIN product_options po ON p.id = po.product_id
    INNER JOIN sizes s ON s.id = po.size_id
    INNER JOIN carts c ON c.product_option_id = po.id
    INNER JOIN users u ON u.id = c.user_id
    WHERE u.id = ?;
    `,
    [userId]
  );
  return cart;
};

const updateCart = async (cartsId, quantity) => {
  return await appDataSource.query(
    `
    UPDATE carts
    SET quantity = ?
    WHERE carts.id = ?;
    `,
    [quantity, cartsId]
  );
};

const deleteCart = async (cartsId) => {
  return await appDataSource.query(
    `
    DELETE FROM carts
    WHERE carts.id = ?;
    `,
    [cartsId]
  );
};

module.exports = { createCart, getCarts, updateCart, deleteCart};