import React, { useState, useEffect } from "react";
import axios from "axios";
import { ArrowUp, ArrowDown, Inbox } from 'lucide-react';
import "../../public/stylesheets/History.css";
const History = (props) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/index/getAll");
        setTransactions(response.data.transactions);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch transactions.");
      } finally {
        setLoading(false);
      }
    };

    if (props.list && props.list.length > 0) {
      setTransactions(props.list);
      setLoading(false);
    } else {
      fetchData();
    }
  }, [props.list]);

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatAmount = (amount) => {
    const suffixes = ['', 'k', 'M', 'B', 'T'];
    const suffixIndex = Math.floor(Math.log10(Math.abs(amount)) / 3);
    const formattedAmount = (amount / Math.pow(10, suffixIndex * 3)).toFixed(2);
    return `${formattedAmount}${suffixes[suffixIndex]}` === 'NaNundefined' ? 
      '0' : 
      `${formattedAmount}${suffixes[suffixIndex]}`;
  };

  const TransactionRow = ({ transaction }) => {
    const { date, title, amount, category, sign } = transaction;
    const formattedDate = formatDate(date);
    const formattedAmount = formatAmount(amount);
    const isIncome = sign === "+";

    return (
      <tr className="border-b border-border transition-colors hover:bg-muted/50">
        <td className="p-4">
          <div className="text-sm text-muted-foreground">
            {formattedDate}
          </div>
        </td>
        <td className="p-4">
          <div className="font-medium">{title}</div>
        </td>
        <td className="p-4">
          <div className={`flex items-center gap-2 font-medium ${
            isIncome ? "text-green-600" : "text-red-600"
          }`}>
            {isIncome ? 
              <ArrowUp className="h-4 w-4" /> : 
              <ArrowDown className="h-4 w-4" />
            }
            Rs {formattedAmount}
          </div>
        </td>
        <td className="p-4">
          <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground">
            {category}
          </div>
        </td>
      </tr>
    );
  };

  const LoadingSkeleton = () => (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center space-x-4 p-4">
          <div className="h-4 w-[30%] animate-pulse rounded bg-muted"></div>
          <div className="h-4 w-[40%] animate-pulse rounded bg-muted"></div>
          <div className="h-4 w-[20%] animate-pulse rounded bg-muted"></div>
        </div>
      ))}
    </div>
  );

  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="rounded-full bg-muted p-4">
        <Inbox className="h-6 w-6 text-muted-foreground" />
      </div>
      <h3 className="mt-4 text-lg font-semibold">No transactions found</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Start adding transactions to see them here.
      </p>
    </div>
  );

  const Content = () => {
    if (loading) return <LoadingSkeleton />;
    if (error) return (
      <div className="p-4 text-sm text-red-500 bg-red-50 rounded-lg">
        {error}
      </div>
    );
    if (!transactions.length) return <EmptyState />;

    return (
      <div className="relative overflow-x-auto rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                Date
              </th>
              <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                Name
              </th>
              <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                Amount
              </th>
              <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                Type
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <TransactionRow key={transaction._id} transaction={transaction} />
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center">
        <h2 className="text-2xl font-semibold tracking-tight">
          Transaction History
        </h2>
      </div>
      <Content />
    </div>
  );
};

export default History;