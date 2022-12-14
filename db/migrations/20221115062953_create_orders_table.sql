-- migrate:up
CREATE TABLE orders (
  id INT NOT NULL AUTO_INCREMENT,
  order_status_id INT NOT NULL,
  user_id INT NOT NULL,
  total_price decimal(8,2) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  CONSTRAINT orders_order_status_id_fkey FOREIGN KEY (order_status_id) REFERENCES order_status (id),
  CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id)
);

-- migrate:down
DROP TABLE orders;