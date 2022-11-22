const { appDataSource } = require("./data-source");

const createOrder = async (orderStatusId, userId) => {
  await appDataSource.query(
    `
    INSERT INTO orders (
      order_status_id,
      user_id
    ) VALUES (
      ?,
      ?
    );
    `,
    [orderStatusId, userId]
  );
};

module.exports = { createOrder };