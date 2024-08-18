const express = require("express");
const router = express.Router();
const incomeModel = require("../models/incomeModel");
router.get("/",async (req, res) => {
  const incomes = await incomeModel.find({});
  let total_income = 0;
  incomes.map((income)=>total_income += income.amount);
  res.send({ incomes, total_income });  
});

router.post("/addIncome", async (req, res) => {
  const { title, amount, date, category, description } = req.body;
  const income = await incomeModel.create({
    title,
    amount,
    date,
    category,
    description,
  });
  res.send(income);
});

router.delete('/deleteIncome/:id', async (req, res) => {
    const Income = await incomeModel.findOneAndDelete({_id: req.params.id});
    res.send(`Your expense:${Income.title} was deleted successfully`);
});

router.put('/updateIncome/:id', async (req, res) => {
    const { title, amount, date, category, description } = req.body;
    const updatedIncome = await incomeModel.findByIdAndUpdate(req.params.id, { title, amount, date, category, description }, { new: true });
    res.send(updatedIncome);
});

module.exports = router;
