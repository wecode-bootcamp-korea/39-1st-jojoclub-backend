-- migrate:up
CREATE TABLE order_items (
  id INT NOT NULL AUTO_INCREMENT,
  order_id INT NOT NULL,
  order_item_status_id INT NOT NULL,
  product_option_id INT NOT NULL,
  quantity INT NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT order_items_order_id_fkey FOREIGN KEY (order_id) REFERENCES orders (id),
  CONSTRAINT order_items_order_item_status_id_fkey FOREIGN KEY (order_item_status_id) REFERENCES order_items_status (id),
  CONSTRAINT order_items_product_option_id_fkey FOREIGN KEY (product_option_id) REFERENCES product_options (id)
);

-- migrate:down
DROP TABLE order_items;