const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');

router.post('/', userController.create);
router.get('/', userController.get);
router.get('/:id', userController.getById);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;