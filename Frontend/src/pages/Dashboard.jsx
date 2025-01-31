import React, { useState, useEffect } from "react";
import axios from "axios";
import { History } from "../components/index";
import { ArrowUp, ArrowDown, Wallet } from 'lucide-react';

// Utility component for stat cards
const StatCard = ({ title, value, icon: Icon, trend }) => (
  <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
    <div className="flex flex-row items-center justify-between pb-2">
      <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </div>
    <div className="space-y-1">
      <div className="text-2xl font-bold">Rs {value}</div>
      {trend && (
        <div className="flex items-center text-xs text-muted-foreground">
          {trend > 0 ? (
            <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
          ) : (
            <ArrowDown className="mr-1 h-4 w-4 text-red-500" />
          )}
          <span>{Math.abs(trend)}% from last month</span>
        </div>
      )}
    </div>
  </div>
);

// Utility component for min-max cards
const MinMaxCard = ({ title, min, max }) => (
  <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-3/4 mx-auto my-4">
    <div className="p-6 pb-2">
      <h3 className="text-lg font-semibold text-center">{title}</h3>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-center">
        <div className="text-center">
          <div className="text-sm font-medium text-muted-foreground">Min</div>
          <div className="text-xl font-bold">Rs {min}</div>
        </div>
        <div className="text-center">
          <div className="text-sm font-medium text-muted-foreground">Max</div>
          <div className="text-xl font-bold">Rs {max}</div>
        </div>
      </div>
    </div>
  </div>
);

// Loading skeleton component
const Skeleton = () => (
  <div className="animate-pulse">
    <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
    <div className="h-8 bg-gray-200 rounded w-full"></div>
  </div>
);

const Dashboard = () => {
  const [netTotal, setNetTotal] = useState(0);
  const [total_expenses, setTotalExpenses] = useState(0);
  const [total_income, setTotalIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/index/getAll");
        setNetTotal(response.data.netTotal);
        setTotalExpenses(response.data.total_expenses);
        setTotalIncome(response.data.total_income);
        setTransactions(response.data.transactions);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const formatAmount = (amount) => {
    const suffixes = ["", "k", "M", "B", "T"];
    const suffixIndex = Math.floor(Math.log10(Math.abs(amount)) / 3);
    const formattedAmount = (amount / Math.pow(10, suffixIndex * 3)).toFixed(2);
    return `${formattedAmount}${suffixes[suffixIndex]}` === 'NaNundefined' ? 
      '0' : 
      `${formattedAmount}${suffixes[suffixIndex]}`;
  };

  // Calculate min/max values
  const { minIncome, maxIncome, minExpense, maxExpense } = transactions.reduce(
    (acc, transaction) => {
      const amount = transaction.amount;
      if (transaction.sign === "+") {
        acc.minIncome = Math.min(acc.minIncome, amount);
        acc.maxIncome = Math.max(acc.maxIncome, amount);
      } else {
        acc.minExpense = Math.min(acc.minExpense, amount);
        acc.maxExpense = Math.max(acc.maxExpense, amount);
      }
      return acc;
    },
    {
      minIncome: Infinity,
      maxIncome: -Infinity,
      minExpense: Infinity,
      maxExpense: -Infinity,
    }
  );

  if (loading) {
    return (
      <div className="p-4 space-y-4">
        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg border bg-card p-6">
              <Skeleton />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-8 border rounded-lg w-full">
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          title="Net Balance"
          value={formatAmount(netTotal)}
          icon={Wallet}
        />
        <StatCard
          title="Total Expenses"
          value={formatAmount(total_expenses)}
          icon={ArrowDown}
          trend={-1}
        />
        <StatCard
          title="Total Income"
          value={formatAmount(total_income)}
          icon={ArrowUp}
          trend={1}
        />
      </div>

      <MinMaxCard
        title="Income Range"
        min={formatAmount(minIncome === Infinity ? 0 : minIncome)}
        max={formatAmount(maxIncome === -Infinity ? 0 : maxIncome)}
      />

      <MinMaxCard
        title="Expense Range"
        min={formatAmount(minExpense === Infinity ? 0 : minExpense)}
        max={formatAmount(maxExpense === -Infinity ? 0 : maxExpense)}
      />

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6">
          <History list={transactions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;