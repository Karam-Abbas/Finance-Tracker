const express = require("express");
const router = express.Router();
router.get("/getAll", async function (req, res) {
  let total_expenses = 0,
    total_income = 0,
    netTotal = 0;
  const user = req.user;
  try {
    await user.populate("incomes").populate("expenses");

    user.incomes.forEach((income) => {
      total_income += income.amount;
    });

    user.expenses.forEach((expense) => {
      total_expenses += expense.amount;
    });

    netTotal = total_income - total_expenses;
    const transactions = [...user.incomes, ...user.expenses];
    //sorting the transactions on the basis of dates
    transactions.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
    });

    res.send({
      netTotal,
      total_expenses,
      total_income,
      transactions,
    });
  } catch (error) {
    console.error("Error populating user data:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
