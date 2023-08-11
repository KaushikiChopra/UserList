'use strict';


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('userDetails',
      {
        id: {
          type: Sequelize.UUID,
          allowNull: false,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4,
        },
        userName: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        password: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            // Do not allow setting to empty string
            notEmpty: {
              msg: "Please provide password",
            },
            min: {
              args: 6,
              msg: "Password is too weak, please enter a password having 6 or more digits",
            },
          },
        },
        phoneNumber: {
          type: Sequelize.STRING,
          allowNull: true,
          unique: true,
        },

        qualification: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        city: {
          type: Sequelize.STRING,
          allowNull: true,
        },

        token: {
          type: Sequelize.STRING,
          allowNull: false,
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
    await queryInterface.dropTable('userDetails');
  }
};