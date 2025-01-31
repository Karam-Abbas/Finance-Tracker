const express = require("express");
const router = express.Router();
const incomeModel = require("../models/incomeModel");
const userModel = require("../models/userModel");
const { isLoggedIn } = require("../middlewares/isLoggedIn");

//First find the logged in user and then gets its list of incomes

// router.get("/getIncomes",async (req, res) => {
//   const user = req.user;
//   const incomes = await incomeModel.find({});
//   let total_income = 0;
//   incomes.map((income)=>total_income += income.amount);
//   res.send({ incomes, total_income });
// });

router.post("/addIncome", isLoggedIn, async (req, res) => {
  try {
    let user = await userModel.findOne({ email: req.user.email });
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    const { title, amount, date, category, description } = req.body;
    if (!title || !amount || !category) {
      return res.status(400).send({ error: "All fields are required" });
    }

    const income = await incomeModel.create({
      title,
      amount,
      date,
      category,
      description,
      userId: user._id,
    });

    user.incomes.push(income._id);
    await user.save();
    res.status(201).send(income);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ error: "An error occurred while adding the income" });
  }
});
// router.delete("/deleteIncome/:id", isLoggedIn, async (req, res) => {
//   const Income = await incomeModel.findOneAndDelete({ _id: req.params.id });
//   res.send(`Your expense:${Income.title} was deleted successfully`);
// });

// router.put("/updateIncome/:id", isLoggedIn, async (req, res) => {
//   const { title, amount, date, category, description } = req.body;
//   const updatedIncome = await incomeModel.findByIdAndUpdate(
//     req.params.id,
//     { title, amount, date, category, description },
//     { new: true }
//   );
//   res.send(updatedIncome);
// });

module.exports = router;
