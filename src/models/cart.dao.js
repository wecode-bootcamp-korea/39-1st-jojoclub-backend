const { appDataSource } = require("./data-source");

const createCart = async (quantity, userId, productOptionId) => {
  await appDataSource.query(
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

const getCart = async (quantity, userId, productOptionId) => {
  await appDataSource.query(
    `
    SELECT 
      po.image_url,
      p.name_ko,
      p.name_en,
      s.name as size,
      po.price
      c.quantity
    FROM products 
    `,
    [quantity, userId, productOptionId]
  );
};

const updateCart = async (cartsId, quantity) => {
  await appDataSource.query(
    `
    UPDATE carts
    SET quantity = ?
    WHERE carts.id = ?;
    `,
    [quantity, cartsId]
  );
};

const deleteCart = async (cartsId) => {
  await appDataSource.query(
    `
    DELETE FROM carts
    WHERE carts.id = ?;
    `,
    [cartsId]
  );
};

module.exports = { createCart, getCart, updateCart, deleteCart};
