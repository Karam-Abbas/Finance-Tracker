const jwt = require("jsonwebtoken");

// Middleware to validate JWT token

const generateToken = (user) => {
  jwt.sign({
    email:user.email,
    id: user._id,
  }, process.env.JWT_PRIVATE_KEY);
};

module.exports = generateToken;
