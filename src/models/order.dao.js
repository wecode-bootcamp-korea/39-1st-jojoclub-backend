const { appDataSource } = require("./data-source");

const getOrders = async (orderStatusId, userId) => {
  await appDataSource.query(
    `
    SELECT
      users.id,
      users.name,
      product_options.
      products.name,
      product_options.price,
      order_items.quantity,
      order_items_status.name,
      orders.created_at,
      orders.total_price,
      order_status.name
    FROM orders o
    LEFT FOIN users u ON u.id = o.user_id
    LEFT JOIN order_items oi ON o.id = oi.order_id
    LEFT JOIN product_options po ON po.id = oi.product_option_id
    LEFT JOIN products p ON p.id = po.produc_id
    LEFT JOIN order_status os ON os.id = o.order_status_id
    LEFT JOIN order_items_status ois ON ois.id = oi.order_item_status_id
    LEFT JOIN sizes z ON z.id = po.
    WHRER users.id = ?;
    
    `,
    [orderStatusId, userId]
  );
};

module.exports = { getOrders };