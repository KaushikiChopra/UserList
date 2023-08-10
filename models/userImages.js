const { Sequelize, DataTypes } = require('sequelize');
const sequelizeInstance = require('../config/db').sequelizeInstance;
const userImage = sequelizeInstance.define('userImage', {
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imageType: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  },

  imageName: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  },

  imageData: {
    type: DataTypes.BLOB('long'),
    allowNull: false
    // allowNull defaults to true
  },



  
}, {
  // Other model options go here
});

module.exports = userImage;