import { Sequelize, DataTypes, Model } from 'sequelize';

module.exports = (sequelize: Sequelize) => {
  class Question extends Model {}

  Question.init(
    {
      type: {
        type: DataTypes.ENUM('boolean', 'input', 'checkbox'),
        allowNull: false,
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      options: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      answer: {
        type: DataTypes.JSON,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'question',
    }
  );

  return Question;
};
