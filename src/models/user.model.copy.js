/**
 * @fileoverview User model definition for PostgreSQL database using Sequelize ORM
 * @module models/user.model
 * @requires sequelize
 */

const { DataTypes } = require('sequelize');
// create user model
const sequelize = require('../config/db.config.js'); // Import the Sequelize instance
const { defaultConfiguration } = require('../app.js');
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true, // Validate email format
    },
  },
  hashedPassword: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('student', 'faculty', 'staff', 'admin', 'superadmin'), // Enum for user roles
    defaultValue: 'user', // Default role is 'user'
    allowNull: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true, // Default is active
    allowNull: false,
  },
  createdBy: {
    type: DataTypes.INTEGER,
    allowNull: true, // Nullable for cases where the user is created by an automated process
  },
  updatedBy: {
    type: DataTypes.INTEGER,
    allowNull: true, // Nullable for cases where the user is updated by an automated process
  },
  lastLogin: {
    type: DataTypes.DATE,
    allowNull: true, // Nullable for cases where the user has not logged in yet
  },
  profilePicture: {
    type: DataTypes.STRING,
    allowNull: true, // Nullable for cases where the user has not uploaded a profile picture
  },
  isEmailVerified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false, // Default is not verified
    allowNull: false,
  },
  verificationToken: {
    type: DataTypes.STRING,
    allowNull: true, // Nullable for cases where the user has not requested email verification
  },
  verificationTokenExpiry: {
    type: DataTypes.DATE,
    allowNull: true, // Nullable for cases where the user has not requested email verification
  },
  passwordResetToken: {
    type: DataTypes.STRING,
    allowNull: true, // Nullable for cases where the user has not requested a password reset
  },
  passwordResetTokenExpiry: {
    type: DataTypes.DATE,
    allowNull: true, // Nullable for cases where the user has not requested a password reset
  }

}, {
  timestamps: true, // adds createdAt and updatedAt fields
});

// Sync the model with the database
const syncUserModel = async () => {
  try {
    await User.sync( );
    console.log('User model synced successfully.');
  } catch (error) {
    console.error('Error syncing User model:', error);
  }
}

syncUserModel();

export default User;