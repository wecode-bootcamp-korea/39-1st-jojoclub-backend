const { appDataSource } = require("./data-source");

const createUser = async (
  name,
  email,
  hashedPassword,
  phoneNumber,
  address
) => {
  await appDataSource.query(
    `
    INSERT INTO users (
      name,
      email,
      password,
      phone_number,
      address
    ) VALUES (
      ?,
      ?,
      ?,
      ?,
      ?
    )
    `,
    [name, email, hashedPassword, phoneNumber, address]
  );
};

const getUserByEmail = async (email) => {
  const [user] = await appDataSource.query(
    //Uers을 배열에 넣은 이유는?
    `
      SELECT *
      FROM users u
      WHERE u.email = ?
    `,
    [email]
  );
  console.log(user);
  return user;
};

module.exports = { createUser, getUserByEmail };
