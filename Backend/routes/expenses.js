const express = require("express");
const router = express.Router();
const expensesModel = require("../models/expensesModel");
const userModel = require("../models/userModel");
const { isLoggedIn } = require("../middlewares/isLoggedIn");
//First find the logged in user and then gets its list of expenses

// router.get("/getExpenses", isLoggedIn, async (req, res) => {
//   const expenses = await expensesModel.find({});
//   let total_expenses = 0;
//   expenses.map((expense) => (total_expenses += expense.amount));
//   res.send({ expenses, total_expenses });
// });

router.post("/addExpense", isLoggedIn, async (req, res) => {
  try {
    let user = await userModel.findOne({ email: req.user.email });
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    const { title, amount, date, category, description } = req.body;
    if (!title || !amount || !date || !category) {
      return res.status(400).send({ error: "All fields are required" });
    }

    const expense = await expensesModel.create({
      title,
      amount,
      date,
      category,
      description,
      userId: user._id,
    });
    user.expenses.push(expense);
    await user.save();
    res.status(201).send(expense);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ error: "An error occurred while adding the expense" });
  }
});

// router.delete("/deleteExpense/:id", isLoggedIn, async (req, res) => {
//   const Expense = await expensesModel.findOneAndDelete({ _id: req.params.id });
//   res.send(`Your expense:${Expense.title} was deleted successfully`);
// });

// router.put("/updateExpense/:id", isLoggedIn, async (req, res) => {
//   const { title, amount, date, category, description } = req.body;
//   const updatedExpense = await expensesModel.findByIdAndUpdate(
//     req.params.id,
//     { title, amount, date, category, description },
//     { new: true }
//   );
//   res.send(updatedExpense);
// });

module.exports = router;
