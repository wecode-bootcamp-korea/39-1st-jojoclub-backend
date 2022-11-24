const { appDataSource } = require("./data-source");

const createOrder = async (productOptionId, quantity, totalPrice, userId) => {

  const queryRunner = appDataSource.createQueryRunner()
  await queryRunner.connect()
  await queryRunner.startTransaction();

  try {

    const order = await appDataSource.query(
      `    
      INSERT INTO orders (
        order_status_id,
        user_id,
        total_price
      ) VALUES (
        1,
        ?,
        ?
      );
      `,
      [userId, totalPrice]
    );
  
    const [getOrderId] = await appDataSource.query(
      `
      SELECT id
        FROM orders o
        WHERE o.user_id = ?
        ORDER BY created_at DESC LIMIT 1;
      `,
      [userId]
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
        1,
        ?,
        ?
      );
      `,
      [ getOrderId["id"], productOptionId, quantity]
    );

    await queryRunner.commitTransaction()

  } catch (err) {
    await queryRunner.rollbackTransaction()

  } finally {
    await queryRunner.release()
  }
}

module.exports = { createOrder };