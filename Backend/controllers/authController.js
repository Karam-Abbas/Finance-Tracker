const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken");

const registerUser = async (req, res) => {
  try {
    let { email, password, name } = req.body;
    let user = await userModel.find({ email: email });

    if (user.length > 0)
      return res.status(400).send({ message: "Email already exists" });

    await bcrypt.hash(password, 10, async (err, hash) => {
      if (err) res.send(err.message);
      else {
        let newUser = await userModel.create({ email, password: hash, name });
        let token = await generateToken(newUser);
        res.cookie("userToken", token);
        res.send({ message: "User registered successfully", user });
      }
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;

    let user = await userModel.findOne({ email: email });

    if (!user) return res.status(404).send({ message: "User not found" });

    await bcrypt.compare(password, user.password, async (err, isMatch) => {
      if (err) res.send(err.message);
      if (!isMatch)
        return res
          .status(400)
          .send({ message: "Invalid password!" });

      let token = await generateToken(user);

      res.cookie("userToken", token);
      res.send({ message: "Logged in successfully", user });
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const logoutUser = (req, res) => {
  res.cookie("userToken", "");
  res.send({ message: "Logged out successfully"});
};

module.exports = { registerUser, loginUser, logoutUser };
