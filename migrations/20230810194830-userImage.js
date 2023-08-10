'use strict';


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('userImages',
      {
        id: {
          type: Sequelize.UUID,
          allowNull: false,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4,
        },
        userId: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      
      imageType: {
        type: Sequelize.STRING,
        allowNull: false
        // allowNull defaults to true
      },
    
      imageName: {
        type: Sequelize.STRING,
        allowNull: false
        // allowNull defaults to true
      },
      imageData: {
        type: Sequelize.BLOB('long'),
        allowNull: false
        // allowNull defaults to true
      },
    
    

        // createdAt, updatedAt and deletedAt managed by Sequelize
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
          allowNull: false,
        },
        deletedAt: {
          type: Sequelize.DATE,
          defaultValue: null,
          allowNull: true,
        },
      }, {
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('userImage');
  }
};