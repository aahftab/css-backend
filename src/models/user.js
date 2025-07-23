import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class User extends Model {}
  User.init(
    {
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
        validate: {
          isEmail: true,
        },
      },
      hashedPassword: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM("user", "admin", "superadmin"),
        allowNull: false,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      defaultScope: {
        attributes: { exclude: ["hashedPassword"] },
      },
      sequelize,
    }
  );
  return User;
};
