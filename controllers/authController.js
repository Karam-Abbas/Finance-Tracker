const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/generateToken");

const registerUser = () =>{
    console.log("Register route");
};
const loginUser = () =>{
    console.log("Login route");
};
const logoutUser = () =>{
    console.log("Logout route");
};

module.exports = {registerUser,loginUser,logoutUser};