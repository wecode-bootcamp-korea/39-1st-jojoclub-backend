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

module.exports = { createCart };
