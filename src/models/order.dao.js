const { appDataSource } = require("./data-source");

const getOrders = async (userId) => {

  return await appDataSource.query(
    `
    SELECT
      o.id orderId,
      o.order_status_id orderStatus,
      o.total_price totalPrice,
      o.created_at createdAt,
        JSON_ARRAYAGG(
        JSON_OBJECT(
        "productName", p.name_ko,
        "quantity", oi.quantity,
        "orderItemStatus", oi.order_item_status_id,
        "productOptionId", oi.product_option_id,
        "price", po.price,
        "size", po.size_id,
        "image", po.image_url
        )
      ) orderProduct
    FROM orders o
    LEFT JOIN order_items oi ON o.id = oi.order_id
    LEFT JOIN product_options po ON po.id = oi.product_option_id
    LEFT JOIN products p ON po.product_id = p.id
    LEFT JOIN sizes s ON s.id = po.size_id
    WHERE o.user_id = 1
    GROUP BY o.id
    `,
    [userId]
  ); 
};

module.exports = { getOrders };

// `
// SELECT
//   u.id
//   u.name,
//   product_options.
//   products.name,
//   product_options.price,
//   order_items.quantity,
//   order_items_status.name,
//   orders.created_at,
//   orders.total_price,
//   order_status.name
// FROM orders o
// LEFT JOIN users u ON u.id = o.user_id
// LEFT JOIN order_items oi ON o.id = oi.order_id
// LEFT JOIN product_options po ON po.id = oi.product_option_id
// LEFT JOIN products p ON p.id = po.produc_id
// LEFT JOIN order_status os ON os.id = o.order_status_id
// LEFT JOIN order_items_status ois ON ois.id = oi.order_item_status_id
// LEFT JOIN sizes s ON s.id = po.size_id
// WHERE o.user_id = 1;

// `,
// [orderStatusId, userId]