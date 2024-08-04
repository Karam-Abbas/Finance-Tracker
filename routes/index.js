const express = require('express');
const router = express.Router();
const incomeModel = require('../models/incomeModel');
const expensesModel = require('../models/expensesModel');
router.get('/', async function (req, res) {
    let total_expenses = 0,total_income = 0 , netTotal = 0;
    const incomes =await incomeModel.find({});
    const expenses =await expensesModel.find({});
    incomes.map((income)=>total_income += income.amount);
    expenses.map((expense)=>total_expenses += expense.amount);
    netTotal = total_income - total_expenses;
    res.send({netTotal,total_expenses,total_income,incomes,expenses});
});

module.exports = router;
