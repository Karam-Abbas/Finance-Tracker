const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middlewares/isLoggedIn");
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/authController");

//routes
router.get("/", (req, res) => {
  res.send("User routes are working");
});

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", isLoggedIn, logoutUser);

module.exports = router;
