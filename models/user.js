const { Sequelize, DataTypes } = require('sequelize');
const sequelizeInstance = require('../config/db').sequelizeInstance;

const User = sequelizeInstance.define('userDetails', {
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  qualification: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  phoneNumber: {
    type: DataTypes.STRING,
  },
  token: {
    type : DataTypes.STRING,
  }

}, {
  // Other model options go here
});

module.exports = User;