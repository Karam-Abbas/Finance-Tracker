const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");
const {registerUser,loginUser,logoutUser} = require("../controllers/authController");

//routes
router.get('/',(req, res)=>{
    res.send('User routes are working');
});

router.post('/register',registerUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);

module.exports = router;