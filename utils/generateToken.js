const jwt = require("jsonwebtoken");

// Middleware to validate JWT token

const generateToken = (user) => {
  try {
    return jwt.sign(
      {
        email: user.email,
        id: user._id,
      },
      process.env.JWT_PRIVATE_KEY,
      { algorithm: "ES256" }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = { generateToken };
