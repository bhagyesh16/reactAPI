// db.js
const { Sequelize } = require('sequelize');
const EmployeeModel = require('./user');

const sequelize = new Sequelize({
  dialect: 'mssql',
  host: 'localhost',
  username: 'iits',
  password: 'iits123',
  database: 'ReactData',
});

const Employee = EmployeeModel(sequelize);

module.exports = { Employee };
