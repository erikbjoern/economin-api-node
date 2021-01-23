'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Budget extends Model {
    static associate(models) {}
  };
  Budget.init({
    amount: DataTypes.INTEGER,
    start_date: DataTypes.STRING,
    end_date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Budget',
  });
  return Budget;
};