-- migrate:up
CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  name_ko VARCHAR(100) NOT NULL,
  name_en VARCHAR(100) NOT NULL,
  content TEXT NULL,
  ingredient TEXT NULL,
  manual TEXT NULL,
  gender_id INT NOT NULL,
  scent_id INT NOT NULL,
  thumbnail_img_url VARCHAR(2083),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  CONSTRAINT products_gender_id_fkey FOREIGN KEY (gender_id) REFERENCES genders (id),
  CONSTRAINT products_scent_id_fkey FOREIGN KEY (scent_id) REFERENCES scents (id)
);

-- migrate:down
DROP TABLE products;