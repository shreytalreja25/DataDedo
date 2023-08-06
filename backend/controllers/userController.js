// controllers/userController.js
const bcrypt = require('bcrypt');
const User = require('../models/User');

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to register user.' });
  }
};

module.exports = { registerUser };
