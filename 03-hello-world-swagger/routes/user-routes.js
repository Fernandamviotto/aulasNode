const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');

router.get('/', userController.get);
router.get('/:id', userController.getById);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;

// Swagger
/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management operations
 */