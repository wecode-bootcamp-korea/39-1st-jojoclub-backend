-- migrate:up
CREATE TABLE product_options (
  id INT NOT NULL AUTO_INCREMENT,
  product_id INT NOT NULL,
  size_id INT NOT NULL,
  price DECIMAL(8,2),
  image_url VARCHAR(2083) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT product_options_product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id),
  CONSTRAINT product_options_size_id_fkey FOREIGN KEY (size_id) REFERENCES sizes (id)
);

-- migrate:down
DROP TABLE product_options;