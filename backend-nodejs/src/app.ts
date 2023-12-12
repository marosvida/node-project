import * as express from 'express';
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

import { sequelize } from './sequelize';
import learningPackageRoutes from './routes/LearningPackageRoutes';

const app = express();
// Middleware to parse JSON request body
app.use(express.json());
// Use the LearningPackage routes
app.use('/api', learningPackageRoutes);

// Define the Swagger options
const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Node&React Learning project API',
            version: '1.0.0',
            description: 'API for managing Learning Packages',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server',
            },
        ],
    },
    apis: ['./src/routes/LearningPackageRoutes.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerSpec));
const port = process.env.PORT || 3000;


sequelize.authenticate().then(() => {
     console.log('Connection has been established successfully.');
 }).catch((error) => {
     console.error('Unable to connect to the database: ', error);
 });
 

sequelize.sync().then(() => {
    console.log('Sync successful!');
}).catch((error) => {
    console.error('Unable to sync: ', error);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
