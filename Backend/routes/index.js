const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");
const { isLoggedIn } = require("../middlewares/isLoggedIn");

router.get("/getAll", isLoggedIn, async (req, res) => {
  try {
    let user = await userModel
      .findOne({ email: req.user.email })
      .populate("incomes")
      .populate("expenses");
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    const total_income = user.incomes.reduce((acc, income) => acc + income.amount,0);
    const total_expenses = user.expenses.reduce((acc, expense) => acc + expense.amount,0);

    const netTotal = total_income - total_expenses;

    const transactions = [...user.incomes, ...user.expenses];
    transactions.sort((a, b) => new Date(a.date) - new Date(b.date));
    console.log(transactions);
    res.json({
      netTotal,
      total_expenses,
      total_income,
      transactions,
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});
module.exports = router;
