-- migrate:up
CREATE TABLE carts (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  product_option_id INT NOT NULL,
  quantity INT NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT carts_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id),
  CONSTRAINT carts_product_option_id_fkey FOREIGN KEY (product_option_id) REFERENCES product_options (id)
);

-- migrate:down
DROP TABLE carts;