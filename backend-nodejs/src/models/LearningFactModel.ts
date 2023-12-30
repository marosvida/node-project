import { DataTypes } from 'sequelize';

const LearningFactModel = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    wordFrench: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wordEnglish: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    learningPackageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    disabled: { // for soft delete
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }
};

export { LearningFactModel };