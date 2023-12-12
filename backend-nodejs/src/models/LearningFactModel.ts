import { DataTypes } from 'sequelize';

const LearningFactModel = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    learningPackageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    disabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }
};

export { LearningFactModel };