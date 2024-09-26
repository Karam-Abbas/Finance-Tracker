import "../../public/stylesheets/Dashboard.css";
import "../../public/stylesheets/LogIn.css";
const MiniHistory = (props) => {
  const Incomes = () => {
    const transactions = props.list;
    transactions.map((transaction) => {
      if (transaction.sign === "+") {
        return (
          <tr key={transaction._id}>
            <td className="border border-x-0 border-y border-[--primary-color] p-2 text-green-500">
              {transaction.title}
            </td>
            <td className="border border-x-0 border-y border-[--primary-color] p-2 text-green-500">
              {transaction.amount}
            </td>
          </tr>
        );
      }
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
            <tr>
              <th className="p-2 text-xl font-lato">Name</th>
              <th className="p-2 text-xl font-lato">Amount</th>
            </tr>
          </thead>
          <tbody>{Incomes()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default MiniHistory;
