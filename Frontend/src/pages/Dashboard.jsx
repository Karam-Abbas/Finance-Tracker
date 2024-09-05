import React, { useState } from "react";
import "../../public/stylesheets/Dashboard.css";
import "../../public/stylesheets/LogIn.css";
import { History } from "../components/index";
const Dashboard = () => {
  const [balance , setBalance] = useState(0);
  const [expenses , setExpenses] = useState(0);
  const [incomes , setIncomes] = useState(0);
  const [transactions, setTransactions] = useState([]);
  // Start from here 
  return (
      <div className="border-x border-y border-solid border-[--primary-color] h-[56rem] w-full mr-3 p-5">
        <div className="flex flex-row items-center justify-center gap-3">
          <div className="flex flex-col items-center justify-end gap-2 border-x border-y border-solid border-[--primary-color] px-8 py-5 rounded-lg">
            <div className="text-2xl text-[--primary-color] font-medium font-inter">
              Net Balance
            </div>
            <div className="text-5xl text-[--accent-color] font-medium font-lato">
              Rs 1,000
            </div>
          </div>
          <div className="flex flex-col items-center justify-end gap-2 border-x border-y border-solid border-[--primary-color] px-8 py-5 rounded-lg">
            <div className="text-2xl text-[--primary-color] font-medium font-inter">
              Net Expenses
            </div>
            <div className="text-5xl text-[--accent-color] font-medium font-lato">
              Rs 1,000
            </div>
          </div>
          <div className="flex flex-col items-center justify-end gap-2 border-x border-y border-solid border-[--primary-color] px-8 py-5 rounded-lg">
            <div className="text-2xl text-[--primary-color] font-medium font-inter">
              Net Incomes
            </div>
            <div className="text-5xl text-[--accent-color] font-medium font-lato">
              Rs 1,000
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
              Rs10
            </span>
            <span className="text-3xl font-medium font-inter text-[--placeholder-color]">
              Rs1000
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
              Rs10
            </span>
            <span className="text-3xl font-medium font-inter text-[--placeholder-color]">
              Rs1000
            </span>
          </div>
        </div>

        
        <History/>
      </div>
  );
};
export default Dashboard;
