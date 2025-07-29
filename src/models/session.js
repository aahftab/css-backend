import { Model, Sequelize } from "sequelize";
export default (sequelize, DataTypes) => {
  class Session extends Model {}
  Session.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.literal("gen_random_uuid()"),
        primaryKey: true,
        allowNull: false,
      },
      user: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
      expires: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Session",
    }
  );
  return Session;
};
