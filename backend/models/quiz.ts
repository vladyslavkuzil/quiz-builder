import { Sequelize, DataTypes, Model } from 'sequelize';

module.exports = (sequelize: Sequelize) => {
  class Quiz extends Model {}

  Quiz.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'quiz',
    }
  );

  return Quiz;
};
