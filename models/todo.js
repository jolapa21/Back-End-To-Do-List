'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    static associate(models) {
    }
  }
  Todo.init({
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      index: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    isCompleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};