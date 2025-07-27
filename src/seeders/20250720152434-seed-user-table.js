import dotenv from 'dotenv'
dotenv.config();
/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
   const CURRENT_TIMESTAMP = '2025-07-21 23:09:34.952644+05:30';
   
    return await queryInterface.bulkInsert("users", [
      {
        username: "aftab",
        firstname: "Aftab",
        lastname: "Ansari",
        email: "gm8037@myamu.ac.in",
        hashed_password: process.env.SEED_PASSWORD,
        role: "superadmin",
        created_at: CURRENT_TIMESTAMP,
        updated_at: CURRENT_TIMESTAMP,
        deleted_at: null,
      },
      {
        username: "john_doe",
        firstname: "John",
        lastname: "Doe",
        email: "john.doe@example.com",
        hashed_password: process.env.SEED_PASSWORD,
        role: "user",
        created_at: CURRENT_TIMESTAMP,
        updated_at: CURRENT_TIMESTAMP,
        deleted_at: null,
      },
      {
        username: "alice_smith",
        firstname: "Alice",
        lastname: "Smith",
        email: "alice.smith@example.com",
        hashed_password: process.env.SEED_PASSWORD,
        role: "user",
        created_at: CURRENT_TIMESTAMP,
        updated_at: CURRENT_TIMESTAMP,
        deleted_at: null,
      },
      {
        username: "bob_johnson",
        firstname: "Bob",
        lastname: "Johnson",
        email: "bob.johnson@example.com",
        hashed_password: process.env.SEED_PASSWORD,
        role: "user",
        created_at: CURRENT_TIMESTAMP,
        updated_at: CURRENT_TIMESTAMP,
        deleted_at: null,
      },

      {
        username: "admin_user",
        firstname: "Admin",
        lastname: "User",
        email: "admin.user@example.com",
        hashed_password: process.env.SEED_PASSWORD,
        role: "admin",
        created_at: CURRENT_TIMESTAMP,
        updated_at: CURRENT_TIMESTAMP,
        deleted_at: null,
      },

    ])
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("users", null, {});
  }
};
