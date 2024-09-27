import "../../public/stylesheets/Dashboard.css";
import "../../public/stylesheets/LogIn.css";

const MiniHistory = (props) => {
  const Expenditure = () => {
    const transactions = props.list;

    const filteredTransactions = transactions.filter(
      (transaction) => transaction.sign === props.ans
    );

    if (filteredTransactions.length === 0) {
      return (
        <tr>
          <td colSpan="2" className="text-center p-4">
            No Records found!
          </td>
        </tr>
      );
    }

    const formatAmount = (amount) => {
      const suffixes = ['', 'k', 'M', 'B', 'T'];
      const suffixIndex = Math.floor(Math.log10(Math.abs(amount)) / 3);
      const formattedAmount = (amount / Math.pow(10, suffixIndex * 3)).toFixed(2);
      return `${formattedAmount}${suffixes[suffixIndex]}`;
    };

    return filteredTransactions.map((transaction) => {
      const textColor =
        transaction.sign === "+" ? "text-green-500" : "text-red-500";
      return (
        <tr key={transaction._id}>
          <td
            className={`border border-x-0 border-y border-[--primary-color] p-2 ${textColor}`}
          >
            {transaction.title}
          </td>
          <td
            className={`border border-x-0 border-y border-[--primary-color] p-2 ${textColor}`}
          >
            Rs {formatAmount(transaction.amount)}
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <div className="flex items-center justify-center text-3xl font-medium font-inter p-5">
        <p>History</p>
      </div>
      <div className="table_component">
        <table className="w-full">
        <thead>
            {props.list.filter((transaction) => transaction.sign === props.ans).length > 0 ?(
              <tr>
                <th className="p-2 text-xl font-lato">Name</th>
                <th className="p-2 text-xl font-lato">Amount</th>
              </tr>
            ):(
              <>
              </>
            )}
          </thead>
          <tbody>{Expenditure()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default MiniHistory;