"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GameRound extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.GameRound.belongsTo(models.Room, {
        foreignKey: "roomId",
      });
    }
  }
  GameRound.init(
    {
      roomId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      winnerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        // ACTIVE, INACTIVE, ATAU FINISHED
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "GameRound",
    }
  );
  return GameRound;
};
