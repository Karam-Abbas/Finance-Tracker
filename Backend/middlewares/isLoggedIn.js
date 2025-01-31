const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const isLoggedIn = async (req, res, next) => {
  if (!req.cookies.userToken) {
    console.log("No cookie found!");
    return res
      .status(401)
      .json({ message: "Not logged in (cookie not found)" });
  }
  try {
    let decoded = jwt.verify(
      req.cookies.userToken,
      process.env.JWT_PUBLIC_KEY,
      { algorithms: ["ES256"] }
    );
    let user = await userModel
      .findOne({ email: decoded.email })
      .select("-password");
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Redirect to login page (cookie wasn't able to verify!)",
      error: err.message,
    });
  }
};

module.exports = { isLoggedIn };
