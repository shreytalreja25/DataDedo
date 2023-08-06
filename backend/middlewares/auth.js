// middlewares/auth.js
const passport = require('passport');

const authenticateUser = passport.authenticate('local', { session: false });

module.exports = authenticateUser;
