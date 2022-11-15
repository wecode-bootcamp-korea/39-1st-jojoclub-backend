-- migrate:up
CREATE TABLE payments_history (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  total_price DECIMAL(8,2),
  order_id INT NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT payments_history_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id),
  CONSTRAINT payments_history_order_id_fkey FOREIGN KEY (order_id) REFERENCES orders (id)
);

-- migrate:down
DROP TABLE payments_history;