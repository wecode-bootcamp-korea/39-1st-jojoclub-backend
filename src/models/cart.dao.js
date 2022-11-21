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

const updateCarts = async (cartsId, quantity) => {
  await appDataSource.query(
    `
    UPDATE carts
    SET quantity = ?
    WHERE carts.id = ?;
    `,
    [quantity, cartsId]
  );
};

const deleteCarts = async (cartsId) => {
  await appDataSource.query(
    `
    DELETE FROM carts
    WHERE carts.id = ?;
    `,
    [cartsId]
  );
};

module.exports = { createCart, updateCarts, deleteCarts };
