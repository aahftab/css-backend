import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Session extends Model {}
  Session.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.literal("gen_random_uuid()"),
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
      modelName: "session",
    }
  );
  return Session;
};
