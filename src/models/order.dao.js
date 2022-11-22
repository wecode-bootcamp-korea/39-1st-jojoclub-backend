const { appDataSource } = require("./data-source");

const createOrder = async ( orderId, orderStatusId, userId, orderItemStatusId, productOptionId, quantity, totalPrice) => {
  const order = await appDataSource.query(
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

  const orderItem = await appDataSource.query(
    `
    INSERT INTO order_items (
      order_id,
      order_item_status_id,
      product_option_id,
      quantity
    ) VALUES (
      ?,
      ?,
      ?,
      ?
    );
    `,
    [orderId, orderItemStatusId, productOptionId, quantity]
  );

  const paymentsHistory = await appDataSource.query(
    `
    INSERT INTO payments_history (
      total_price,
      order_id
    ) VALUES (
      ?,
      ?
    );
    `,
    [totalPrice, orderId]
  );

  return order, orderItem, paymentsHistory;
};

module.exports = { createOrder };