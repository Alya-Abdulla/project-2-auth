'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.post.belongsTo(models.user)
      models.post,this.hasMany(models.comments)
    }
  }
  post.init({
    title: DataTypes.STRING,
    message: DataTypes.STRING,
    creater: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};