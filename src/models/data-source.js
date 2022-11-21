const { DataSource } = require("typeorm");

const appDataSource = new DataSource({
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const initializeData = async () => {
  await appDataSource
    .initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((error) => {
      console.error(error);
    });
};

initializeData();

module.exports = { appDataSource };
