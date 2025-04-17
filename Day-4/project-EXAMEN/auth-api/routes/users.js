const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const userController = require('../controllers/userController');

router.get('/me', auth, userController.getMe);

router.get('/', auth, userController.getAllUsers);

router.delete('/:id', auth, userController.deleteUser);

module.exports = router;