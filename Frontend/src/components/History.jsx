import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../public/stylesheets/Dashboard.css";
import "../../public/stylesheets/LogIn.css";

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
      month: 'long', // 'short' for abbreviated month names
      day: 'numeric',
    });
  };

  const formatAmount = (amount) => {
    const suffixes = ['', 'k', 'M', 'B', 'T'];
    const suffixIndex = Math.floor(Math.log10(Math.abs(amount)) / 3);
    const formattedAmount = (amount / Math.pow(10, suffixIndex * 3)).toFixed(2);
    return `${formattedAmount}${suffixes[suffixIndex]}`==='NaNundefined'? 0 :`${formattedAmount}${suffixes[suffixIndex]}`;
  };

  const renderTransactionRow = (transaction) => {
    const { date, title, amount, category, sign } = transaction;

    const formattedDate = formatDate(date);
    const formattedAmount = formatAmount(amount);
    const isIncome = sign === "+";

    return (
      <tr key={transaction._id}>
        <td
          className={`border border-x-0 border-y border-[--primary-color] p-2 ${
            isIncome ? "text-green-600" : "text-red-600"
          }`}
        >
          {formattedDate}
        </td>
        <td
          className={`border border-x-0 border-y border-[--primary-color] p-2 ${
            isIncome ? "text-green-600" : "text-red-600"
          }`}
        >
          {title}
        </td>
        <td
          className={`border border-x-0 border-y border-[--primary-color] p-2 ${
            isIncome ? "text-green-600" : "text-red-600"
          }`}
        >
          Rs {formattedAmount}
        </td>
        <td
          className={`border border-x-0 border-y border-[--primary-color] p-2 ${
            isIncome ? "text-green-600" : "text-red-600"
          }`}
        >
          {category}
        </td>
      </tr>
    );
  };

  const fullDisplay = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p className="text-red-500">{error}</p>;
    }

    if (transactions.length > 0) {
      return (
        <div className="table_component">
          <table className="w-3/4">
            <thead>
              <tr>
                <th className="border border-x-0 border-y border-[--primary-color] p-2 text-xl font-lato">
                  Date
                </th>
                <th className="border border-x-0 border-y border-[--primary-color] p-2 text-xl font-lato">
                  Name
                </th>
                <th className="border border-x-0 border-y border-[--primary-color] p-2 text-xl font-lato">
                  Amount
                </th>
                <th className="border border-x-0 border-y border-[--primary-color] p-2 text-xl font-lato">
                  Type
                </th>
              </tr>
            </thead>
            <tbody>{transactions.map(renderTransactionRow)}</tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div>
          <p className="text-3xl text-[--primary-color] flex flex-row justify-center items-center w-full">
            No transactions found.
          </p>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center text-5xl font-medium font-inter p-5 ">
        <p>History</p>
      </div>
      {fullDisplay()}
    </div>
  );
};

export default History;
