import { DataTypes } from 'sequelize';

const LearningPackageModel = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    targetAudience: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficultyLevel: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
};

export { LearningPackageModel };