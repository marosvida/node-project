import { Router } from 'express';
import { LearningPackageSeq, LearningFactSeq } from '../sequelize';
import { LearningFact, LearningPackage } from '../interfaces';

const learningPackageRoutes = Router();

// Define the GET route for /api/package
/**
 * @openapi
 * /api/package:
 *  get:
 *     description: Get all Learning Packages
 *     responses:
 *       200:
 *          description: A successful response
 *       500:
 *         description: Failed to retrieve data
 */
learningPackageRoutes.get('/package', (req, res) => {
    LearningPackageSeq.findAll({
        include: [{
            model: LearningFactSeq,
            required: false,
            where: {
                disabled: false
            }
        }]
    }).then(learningPackages => {
        res.json(learningPackages);
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
    });
});

// Define the GET route for /api/package/:id
/**
 * @openapi
 * /api/package/{id}:
 *  get:
 *     description: Get a Learning Package by ID
 *     responses:
 *       200:
 *         description: A successful response
 *       404:
 *         description: Entity not found
 *       500:
 *         description: Failed to retrieve data
 */
learningPackageRoutes.get('/package/:id', (req, res) => {
    const packageId = parseInt(req.params.id, 10); // Parse the ID from the request parameters as an integer

    // Find the LearningPackage by its ID
    LearningPackageSeq.findOne({
        where: {
            id: packageId
        },
        include: [{
            model: LearningFactSeq,
            required: false,
            where: {
                disabled: false
            }
        }]
    }).then(responseData => {
        console.log(responseData);
        if (responseData === null) {
            res.status(404).send(`Entity not found for id: ${packageId}`);
            return;
        }

        res.status(200).json(responseData);
    }).catch((error) => {
        res.status(500).send(`Failed to retrieve data`);
        console.error('Failed to retrieve data : ', error);
    });
});

// Define the POST route for /api/package
/**
 * @openapi
 * /api/package:
 *  post:
 *     description: Create a new LearningPackage
 *     responses:
 *       200:
 *         description: A successful response
 *       400:
 *         description: Mandatory fields are missing
 */
learningPackageRoutes.post('/package', (req, res) => {
    // Get the JSON data from the request body
    const newPackage = req.body as LearningPackage;

    // Validate that mandatory fields are provided
    if (!newPackage.title || !newPackage.description || !newPackage.category || !newPackage.targetAudience || !newPackage.difficultyLevel) {
        // Respond with a "Bad Request" error if mandatory fields are missing
        res.status(400).send('Mandatory fields are missing.');
        return;
    }

    LearningPackageSeq.create(
        {...newPackage}
    ).then(response => {
        res.status(200).json(response);
        console.log("New record of LearningPackage created successfully!")
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
    });
});

// Define the PUT route for /api/package
/**
 * @openapi
 * /api/package:
 *  put:
 *     description: Update an existing LearningPackage
 *     responses:
 *       200:
 *         description: A successful response
 *       404:
 *         description: Entity not found
 *       500:
 *         description: Failed to retrieve data
 */
learningPackageRoutes.put('/package', (req, res) => {
    const updatedPackage = req.body as LearningPackage;

    if (!updatedPackage.id) {
        res.status(404).send(`Id is missing!`);
        return;
    }

    LearningPackageSeq.findOne({
        where: {
            id: updatedPackage.id
        }
    }).then(responseData => {
        if (responseData === null) {
            res.status(404).send(`Entity not found for id: ${updatedPackage.id}`);
            return;
        }

        responseData.set(updatedPackage);
        responseData.save();

        res.status(200).json(updatedPackage);
    }).catch((error) => {
        res.status(500).send(`Failed to retrieve data`);
        console.error('Failed to retrieve data : ', error);
    });
});

// Define the GET route for /api/package-summaries
/**
 * @openapi
 * /api/package-summaries:
 *  get:
 *     description: Get Package Summaries
 *     responses:
 *       200:
 *         description: A successful response
 *       500:
 *         description: Failed to retrieve data
 */
learningPackageRoutes.get('/package-summaries', (req, res) => {
    LearningPackageSeq.findAll({attributes: ['id', 'title']}).then(packageSummaries => {
        res.status(200).json(packageSummaries);
    }).catch((error) => {
        res.status(500).send(`Failed to retrieve data`);
        console.error('Failed to retrieve data : ', error);
    });
});


// LEARNING FACTS
// Define the GET route for /api/package/:id/fact
/**
 * @openapi
 * /api/package/{id}/fact:
 *  get:
 *     description: Get all Learning Facts for a Learning Package
 *     responses:
 *       200:
 *        description: A successful response
 *       400:
 *        description: Package Id is missing
 *       500:
 *         description: Failed to retrieve data
 */
learningPackageRoutes.get('/package/:id/fact', (req, res) => {
    const packageId = parseInt(req.params.id, 10);

    if (!packageId) {
        res.status(400).send(`Package Id is missing!`);
        return;
    }

    LearningFactSeq.findAll({
        where: {
            learningPackageId: packageId,
            disabled: false
        }
    }).then(learningFacts => {
        res.status(200).json(learningFacts);
    }).catch((error) => {
        res.status(500).send(`Failed to retrieve data`);
        console.error('Failed to retrieve data : ', error);
    });
});

// Define the POST route for /api/package/:id/fact
/**
 * @openapi
 * /api/package/{id}/fact:
 *  post:
 *     description: Create a new LearningFact for a Learning Package
 *     responses:
 *       200:
 *        description: A successful response
 *       400:
 *        description: Package Id is missing
 *       500:
 *         description: Failed to retrieve data
 */
learningPackageRoutes.post('/package/:id/fact', (req, res) => {
    const packageId = parseInt(req.params.id, 10);

    if (!packageId) {
        res.status(400).send(`Package Id is missing!`);
        return;
    }

    // Get the JSON data from the request body
    const newLearningFact = req.body as LearningFact;

    // Validate that mandatory fields are provided
    if (!newLearningFact.name ) {
        // Respond with a "Bad Request" error if mandatory fields are missing
        res.status(400).send('Learning Fact name is missing!');
        return;
    }

    newLearningFact.learningPackageId = packageId;

    LearningFactSeq.create(
        {...newLearningFact}
    ).then(response => {
        res.status(200).json(response);
        console.log("New LearningFact created successfully!")
    }).catch((error) => {
        res.status(500).send(`Failed to retrieve data`);
        console.error('Failed to create a new record : ', error);
    });
});

// Define the PUT route for /api/package/:id/fact
/**
 * @openapi
 * /api/package/{id}/fact:
 *  post:
 *     description: Update a LearningFact for a Learning Package
 *     responses:
 *       200:
 *        description: A successful response
 *       400:
 *        description: Package Id is missing/ Fact id is missing
 *       403:
 *          description: Learning Fact does not belong to the package
 *       404:
 *          description: Entity not found
 *       500:
 *        description: Failed to retrieve data
 */
learningPackageRoutes.put('/package/:id/fact', (req, res) => {
    const packageId = parseInt(req.params.id, 10);

    if (!packageId) {
        res.status(400).send(`Package Id is missing!`);
        return;
    }

    const updatedLearningFact = req.body as LearningFact;

    if (!updatedLearningFact.id) {
        res.status(400).send(`Fact id is missing!`);
        return;
    }

    LearningFactSeq.findOne({
        where: {
            id: updatedLearningFact.id
        }
    }).then(responseData => {
        if (responseData === null) {
            res.status(404).send(`Entity not found for id: ${updatedLearningFact.id}`);
            return;
        }

        const responseJson : LearningFact = responseData.toJSON();

        if (responseJson.learningPackageId !== packageId) {
            res.status(403).send(`Learning Fact does not belong to the package!`);
            return;
        }

        responseData.set(updatedLearningFact);
        responseData.save();

        res.status(200).json(updatedLearningFact);
    }).catch((error) => {
        res.status(500).send(`Failed to retrieve data`);
        console.error('Failed to retrieve data : ', error);
    });
});

// Define the DELETE route for /api/package/:id/fact/:factId
/**
 * @openapi
 * /api/package/{id}/fact/{factId}:
 *  delete:
 *     description: Delete a LearningFact from a Learning Package
 *     responses:
 *       200:
 *        description: A successful response
 *       400:
 *        description: Package Id is missing / Fact id is missing
 *       403:
 *          description: Learning Fact does not belong to the package
 *       404:
 *          description: Entity not found
 *       500:
 *         description: Failed to retrieve data
 */
learningPackageRoutes.delete('/package/:id/fact/:factId', (req, res) => {
    const packageId = parseInt(req.params.id, 10);

    if (!packageId) {
        res.status(400).send(`Package Id is missing!`);
        return;
    }

    const factId = parseInt(req.params.factId, 10);

    if (!factId) {
        res.status(400).send(`FactId is missing!`);
        return;
    }

    LearningFactSeq.findOne({
        where: {
            id: factId
        }
    }).then(responseData => {
        if (responseData === null) {
            res.status(404).send(`Entity not found for id: ${factId}`);
            return;
        }

        const responseJson : LearningFact = responseData.toJSON();

        if (responseJson.learningPackageId !== packageId) {
            res.status(403).send(`Learning Fact does not belong to the package!`);
            return;
        }

        responseData.set({...responseData, disabled: true});
        responseData.save();

        res.status(200).json(responseData);
    }).catch((error) => {
        res.status(500).send(`Failed to retrieve data`);
        console.error('Failed to retrieve data : ', error);
    });
});


// Export the router
export default learningPackageRoutes;