// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateUser = require('../middlewares/auth');

router.post('/register', userController.registerUser);
router.post('/login', authenticateUser, (req, res) => {
  res.status(200).json({ message: 'Login successful.' });
});

module.exports = router;
