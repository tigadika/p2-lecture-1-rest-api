'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsTo(models.Genre, { foreignKey: 'genreId' })
    }
  }
  Movie.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Title cannot empty'
        },
        notEmpty: {
          msg: 'Title cannot empty'
        }
      }
    },
    releaseYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Release Year cannot empty'
        },
        notEmpty: {
          msg: 'Release Year cannot empty'
        }
      }
    },
    imageUrl: DataTypes.STRING,
    genreId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};