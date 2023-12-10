module.exports = {
  HOST: "thanvasucloud.com",
  PORT: "1433",
  USER: "uinet",
  PASSWORD: "p@$$w0rd",
  DB: "CFS_TBC_Restaurant",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
