const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Game extends Model {}

Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },

    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    short_description: {
      type: DataTypes.STRING(3000),
      allowNull: false,
      required: true,
    },

    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    platform: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },

    release_date: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "games",
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = Game;
