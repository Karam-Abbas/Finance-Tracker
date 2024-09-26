import React, { useState, useEffect } from "react";
import "../../public/stylesheets/Dashboard.css";
import "../../public/stylesheets/LogIn.css";
import { History } from "../components/index";
import axios from "axios";
const Dashboard = () => {
  const [netTotal, setNetTotal] = useState(0);
  const [total_expenses, setTotalExpenses] = useState(0);
  const [total_income, setTotalIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/index/getAll");
        setNetTotal(response.data.netTotal);
        setTotalExpenses(response.data.total_expenses);
        setTotalIncome(response.data.total_income);
        setTransactions(response.data.transactions);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  let minIncome = Infinity;
  let maxIncome = -Infinity;
  let minExpense = Infinity;
  let maxExpense = -Infinity;

  for (let transaction of transactions) {
    const amount = transaction.amount;
    const sign = transaction.sign;

    if (sign === "+") {
      if (amount < minIncome) {
        minIncome = amount;
      }
      if (amount > maxIncome) {
        maxIncome = amount;
      }
    } else if (sign === "-") {
      if (amount < minExpense) {
        minExpense = amount;
      }
      if (amount > maxExpense) {
        maxExpense = amount;
      }
    }
  }
  if (minIncome === Infinity) minIncome = 0;
  if (maxIncome === -Infinity) maxIncome = 0;
  if (minExpense === Infinity) minExpense = 0;
  if (maxExpense === -Infinity) maxExpense = 0;
  return (
    <div className="border-x border-y border-solid border-[--primary-color] h-[56rem] w-full mr-3 p-5">
      <div className="flex flex-row items-center justify-center gap-3">
        <div className="flex flex-col items-center justify-end gap-2 border-x border-y border-solid border-[--primary-color] px-8 py-5 rounded-lg">
          <div className="text-2xl text-[--primary-color] font-medium font-inter">
            Net Balance
          </div>
          <div className="text-5xl text-[--accent-color] font-medium font-lato">
            Rs {netTotal}
          </div>
        </div>
        <div className="flex flex-col items-center justify-end gap-2 border-x border-y border-solid border-[--primary-color] px-8 py-5 rounded-lg">
          <div className="text-2xl text-[--primary-color] font-medium font-inter">
            Net Expenses
          </div>
          <div className="text-5xl text-[--accent-color] font-medium font-lato">
            Rs {total_expenses}
          </div>
        </div>
        <div className="flex flex-col items-center justify-end gap-2 border-x border-y border-solid border-[--primary-color] px-8 py-5 rounded-lg">
          <div className="text-2xl text-[--primary-color] font-medium font-inter">
            Net Incomes
          </div>
          <div className="text-5xl text-[--accent-color] font-medium font-lato">
            Rs {total_income}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 px-5 py-3">
        <div className="flex flex-row items-center justify-between w-3/4">
          <span className="text-2xl font-medium">Min</span>
          <span className="text-3xl font-medium">Income</span>
          <span className="text-2xl font-medium">Max</span>
        </div>
        <div className="flex flex-row items-center justify-between w-3/4 border-x border-y border-[--placeholder-color] border-solid p-2">
          <span className="text-3xl font-medium font-inter text-[--placeholder-color]">
            Rs  {minIncome}
          </span>
          <span className="text-3xl font-medium font-inter text-[--placeholder-color]">
            Rs {maxIncome}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 px-5 py-3">
        <div className="flex flex-row items-center justify-between w-3/4">
          <span className="text-2xl font-medium">Min</span>
          <span className="text-3xl font-medium">Expenses</span>
          <span className="text-2xl font-medium">Max</span>
        </div>
        <div className="flex flex-row items-center justify-between w-3/4 border-x border-y border-[--placeholder-color] border-solid p-2">
          <span className="text-3xl font-medium font-inter text-[--placeholder-color]">
            Rs {minExpense}
          </span>
          <span className="text-3xl font-medium font-inter text-[--placeholder-color]">
            Rs {maxExpense}
          </span>
        </div>
      </div>

      <History list={transactions}/>
    </div>
  );
};
export default Dashboard;
