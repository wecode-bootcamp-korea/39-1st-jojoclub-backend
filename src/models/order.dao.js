const { appDataSource } = require("./data-source");

const getOrders = async (userId) => {

  return await appDataSource.query(
    `
    SELECT
      o.id orderId,
      os.name orderStatus,
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
    INNER JOIN order_items oi ON o.id = oi.order_id
    LEFT JOIN order_status os ON os.id = o.order_status_id
    LEFT JOIN product_options po ON po.id = oi.product_option_id
    LEFT JOIN products p ON po.product_id = p.id
    WHERE o.user_id = 1
    GROUP BY o.id
    ORDER By o.created_at DESC;
    `,
    [userId]
  ); 
};

module.exports = { getOrders };