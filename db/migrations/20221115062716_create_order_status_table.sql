-- migrate:up
CREATE TABLE order_status (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100),
  PRIMARY KEY (id)
);

-- migrate:down
DROP TABLE order_status;