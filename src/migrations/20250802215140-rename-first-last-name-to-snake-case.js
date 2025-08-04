/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {

    return await queryInterface.renameColumn('users', 'firstname', 'first_name')
      .then(() => queryInterface.renameColumn('users', 'lastname', 'last_name'));

  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.renameColumn('users', 'first_name', 'firstname')
      .then(() => queryInterface.renameColumn('users', 'last_name', 'lastname'));
  }
};
