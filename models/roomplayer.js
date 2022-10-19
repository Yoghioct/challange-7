"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RoomPlayer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.RoomPlayer.belongsTo(models.Room, {
        foreignKey: "roomId",
      });
    }
  }
  RoomPlayer.init(
    {
      roomId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      playerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "RoomPlayer",
    }
  );
  return RoomPlayer;
};
