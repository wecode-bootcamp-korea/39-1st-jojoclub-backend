const { appDataSource } = require("./data-source");

const createCart = async (quantitiy, userId, productOptionId) => {
  await appDataSource.query(
    `
    INSERT INTO carts (
      quantitiy,
      user_id,
      product_option_id
    ) VALUES (
      ?,
      ?,
      ?
    );
    `,
    [quantitiy, userId, productOptionId]
  );
};

module.exports = { createCart };
