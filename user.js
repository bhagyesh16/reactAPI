// models/employee.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Employee = sequelize.define('Employee', {
    EmployeeID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Firstname: {
      type: DataTypes.STRING,
    },
    Lastname: {
      type: DataTypes.STRING,
    },
    Age: {
      type: DataTypes.INTEGER,
    },
    Gender: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'EmployeeDemographics',
    timestamps: false,
  });

  return Employee;
};
