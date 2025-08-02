'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    return await queryInterface.renameColumn('users', 'firstName', 'first_name')
      .then(() => queryInterface.renameColumn('users', 'lastName', 'last_name'));

  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.renameColumn('users', 'first_name', 'firstName')
      .then(() => queryInterface.renameColumn('users', 'last_name', 'lastName'));
  }
};
