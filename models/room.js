'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Room.hasMany(models.RoomPlayer, {
        foreignKey: "roomId",
      });
      models.Room.hasMany(models.GameRound, {
        foreignKey: "roomId",
      });
    }
  }
  Room.init({
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roundNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: { // ACTIVE, INACTIVE, ATAU FINISHED
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    winnerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};