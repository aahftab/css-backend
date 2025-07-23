import dotenv from 'dotenv'
dotenv.config();
/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const CURRENT_TIMESTAMP = '2025-07-21 23:09:34.952644+05:30';
    return await queryInterface.bulkInsert("Users", [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        hashedPassword: process.env.SEED_PASSWORD,
        role: "user",
        createdAt: CURRENT_TIMESTAMP,
        updatedAt: CURRENT_TIMESTAMP,
        deletedAt: null,
      },
      {
        firstName: "Jane",
        lastName: "Doe",
        email: "jane.doe@example.com",
        hashedPassword: process.env.SEED_PASSWORD,
        role: "user",
        createdAt: CURRENT_TIMESTAMP,
        updatedAt: CURRENT_TIMESTAMP,
        deletedAt: null,
      },
      {
        firstName: "Alice",
        lastName: "Smith",
        email: "alice.smith@example.com",
        hashedPassword: process.env.SEED_PASSWORD,
        role: "user",
        createdAt: CURRENT_TIMESTAMP,
        updatedAt: CURRENT_TIMESTAMP,
        deletedAt: null,
      },
      {
        firstName: "Bob",
        lastName: "Johnson",
        email: "bob.johnson@example.com",
        hashedPassword: process.env.SEED_PASSWORD,
        role: "user",
        createdAt: CURRENT_TIMESTAMP,
        updatedAt: CURRENT_TIMESTAMP,
        deletedAt: null,
      },

      {
        firstName: "Admin",
        lastName: "User",
        email: "admin.user@example.com",
        hashedPassword: process.env.SEED_PASSWORD,
        role: "admin",
        createdAt: CURRENT_TIMESTAMP,
        updatedAt: CURRENT_TIMESTAMP,
        deletedAt: null,
      },
      {
        firstName: "Super",
        lastName: "Admin",
        email: "super.admin@example.com",
        hashedPassword: process.env.SEED_PASSWORD,
        role: "superadmin",
        createdAt: CURRENT_TIMESTAMP,
        updatedAt: CURRENT_TIMESTAMP,
        deletedAt: null,
      },

    ])
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Users", null, {});
  }
};
