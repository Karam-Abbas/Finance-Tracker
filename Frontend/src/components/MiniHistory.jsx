import React from "react";
import { ArrowUpCircle, ArrowDownCircle } from "lucide-react";

const MiniHistory = ({ list, ans }) => {
  const formatAmount = (amount) => {
    const suffixes = ["", "k", "M", "B", "T"];
    const suffixIndex = Math.floor(Math.log10(Math.abs(amount)) / 3);
    const formattedAmount = (amount / Math.pow(10, suffixIndex * 3)).toFixed(2);
    return `${formattedAmount}${suffixes[suffixIndex]}` === "NaNundefined"
      ? "0"
      : `${formattedAmount}${suffixes[suffixIndex]}`;
  };

  const filteredTransactions = list.filter(
    (transaction) => transaction.sign === ans
  );

  const TransactionList = () => {
    if (filteredTransactions.length === 0) {
      return (
        <tr>
          <td
            colSpan="3"
            className="text-center py-8 text-sm text-gray-500"
          >
            No records found
          </td>
        </tr>
      );
    }

    return filteredTransactions.map((transaction) => {
      const isIncome = transaction.sign === "+";
      return (
        <tr key={transaction._id} className="group hover:bg-gray-50">
          <td className="py-3 px-4 text-sm">
            <div className="flex items-center gap-2">
              {isIncome ? (
                <ArrowUpCircle className="h-4 w-4 text-green-500" />
              ) : (
                <ArrowDownCircle className="h-4 w-4 text-red-500" />
              )}
              {transaction.title}
            </div>
          </td>
          <td className={`py-3 px-4 text-sm text-right ${
            isIncome ? "text-green-500" : "text-red-500"
          }`}>
            Rs {formatAmount(transaction.amount)}
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="h-full">
      <div className="mb-4">
        <h2 className="text-lg font-medium">Transaction History</h2>
      </div>
      
      <div className="relative overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            {filteredTransactions.length > 0 && (
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="py-3 px-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
            )}
            <tbody className="divide-y divide-gray-200">
              <TransactionList />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MiniHistory;