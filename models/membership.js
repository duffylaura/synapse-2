const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Membership extends Model {}

Membership.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    group_id: {
      type: DataTypes.INTEGER,
      reference: {
        model: "group",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      reference: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "membership",
  }
);

module.exports = Membership;