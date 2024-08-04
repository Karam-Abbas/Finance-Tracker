const express = require("express");
const router = express.Router();
const expensesModel = require("../models/expensesModel");
router.get("/", async (req, res) => {
  const expenses = await expensesModel.find({});
  let total_expenses = 0;
  expenses.map((expense) => (total_expenses += expense.amount));
  res.send({ expenses, total_expenses });
});

router.post("/addExpense", async (req, res) => {
  const { title, amount, date, category, description } = req.body;
  const expense = await expensesModel.create({
    title,
    amount,
    date,
    category,
    description,
  });
  res.send(expense);
});

router.delete('/deleteExpense/:id', async (req, res) => {
    const Expense = await expensesModel.findOneAndDelete({_id: req.params.id});
    res.send(`Your expense:${Expense.title} was deleted successfully`);
});

router.put('/updateExpense/:id', async (req, res) => {
    const { title, amount, date, category, description } = req.body;
    const updatedExpense = await expensesModel.findByIdAndUpdate(req.params.id, { title, amount, date, category, description }, { new: true });
    res.send(updatedExpense);
});


module.exports = router;
