import React, { useState, useEffect } from "react";
import "../../public/stylesheets/Dashboard.css";
import "../../public/stylesheets/LogIn.css";

const History = () => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/index/getAll");
        setTransactions(response.data.transactions);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const display = () => {
    transactions.forEach((transaction) => {
      if (transaction.sign === "+") {
        return (
          <tr>
            <td className="border border-x-0 border-y border-[--primary-color] p-2 text-red-600">
              {transaction.date}
            </td>
            <td className="border border-x-0 border-y border-[--primary-color] p-2 text-red-600">
              {transaction.title}
            </td>
            <td className="border border-x-0 border-y border-[--primary-color] p-2 text-red-600">
              {transaction.amount}
            </td>
            <td className="border border-x-0 border-y border-[--primary-color] p-2 text-red-600">
              {transaction.category}
            </td>
          </tr>
        );
      } else if (transaction.sign === "-") {
        return (
          <tr>
            <td className="border border-x-0 border-y border-[--primary-color] p-2 text-green-600">
              {transaction.date}
            </td>
            <td className="border border-x-0 border-y border-[--primary-color] p-2 text-green-600">
              {transaction.name}
            </td>
            <td className="border border-x-0 border-y border-[--primary-color] p-2 text-green-600">
              {transaction.amount}
            </td>
            <td className="border border-x-0 border-y border-[--primary-color] p-2 text-green-600">
              {transaction.type}
            </td>
          </tr>
        );
      }
    });
  };
  const fullDisplay = () => {
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
            <tbody>{display()}</tbody>
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
