const { appDataSource } = require("./data-source");

const createUser = async (name, email, hashedPassword, phoneNumber) => {
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
      ?
    );
    `,
    [name, email, hashedPassword, phoneNumber]
  );
};

const getUserByEmail = async (email) => {
  const [user] = await appDataSource.query(
    `
      SELECT *
      FROM users u
      WHERE u.email = ?;
    `,
    [email]
  );
  return user;
};

const getUserByUserId = async (userId) => {
  const [user] = await appDataSource.query(
    `
      SELECT *
      FROM users u
      WHERE u.id = ?;
    `,
    [userId]
  );
  return user;
};
const modifyAddress = async (userId, address) => {
  const modifyAddress = await appDataSource.query(
    `
    UPDATE users
    SET address = ?
    WHERE users.id = ?;
    `,
    [address, userId]
  );
  return modifyAddress;
};

module.exports = { createUser, getUserByEmail, modifyAddress, getUserByUserId };
