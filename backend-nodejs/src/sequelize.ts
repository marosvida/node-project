import { Sequelize } from 'sequelize';

import { LearningPackageModel }  from './models/LearningPackageModel';
import { LearningFactModel }  from './models/LearningFactModel';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.USER, process.env.PASSWORD, {
  host: 'localhost', // Replace with your database server hostname or IP address
  dialect: 'postgres', // Set the dialect to 'postgres' for PostgreSQL
  port: 5432, // Default PostgreSQL port
  logging: false, // Disable logging of SQL queries (optional)
});

const LearningPackageSeq = sequelize.define('LearningPackage', LearningPackageModel);
const LearningFactSeq = sequelize.define('LearningFact', LearningFactModel);

LearningPackageSeq.hasMany(LearningFactSeq, { foreignKey: 'learningPackageId' });

export { sequelize, LearningPackageSeq, LearningFactSeq };