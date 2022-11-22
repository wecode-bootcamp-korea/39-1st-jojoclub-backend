const { appDataSource } = require("./data-source");

const createOrder = async ( orderId, orderStatusId, userId, orderItemStatusId, productOptionId, quantity) => {
  const orders = await appDataSource.query(
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

  const order_items = await appDataSource.query(
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
  return orders, order_items;
};

module.exports = { createOrder };