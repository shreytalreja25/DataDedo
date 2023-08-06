// index.js
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();

// Database Connection
connectDB();

// Middleware
app.use(express.json());
app.use(passport.initialize());

// Passport Local Strategy
passport.use(
  new LocalStrategy(
    { usernameField: 'username', passwordField: 'password' },
    async (username, password, done) => {
      try {
        const user = await User.findOne({ username });

        if (!user) {
          return done(null, false, { message: 'Invalid credentials.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Invalid credentials.' });
        }
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Routes
app.use('/api/user', userRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
