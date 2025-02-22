import React, { useState, useEffect } from "react";
import { MiniHistory } from "../components/index.js";
import axios from "axios";
import { Plus } from "lucide-react";

const Expenses = () => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
    category: "Other",
    description: "",
  });
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const formatAmount = (amount) => {
    const suffixes = ["", "k", "M", "B", "T"];
    const suffixIndex = Math.floor(Math.log10(Math.abs(amount)) / 3);
    const formattedAmount = (amount / Math.pow(10, suffixIndex * 3)).toFixed(2);
    return `${formattedAmount}${suffixes[suffixIndex]}` === 'NaNundefined' ? '0' : `${formattedAmount}${suffixes[suffixIndex]}`;
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("/index/getAll");
      setTotalExpenses(response.data.total_expenses);
      setTransactions(response.data.transactions);
    } catch (error) {
      console.log(error);
    }
  };

  const formHandler = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.amount || !formData.date) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await axios.post("/expenses/addExpense", formData);
      setFormData({
        title: "",
        amount: "",
        date: "",
        category: "Other",
        description: "",
      });
      fetchData();
    } catch (error) {
      console.error(error.message);
      setError("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-8 h-full w-full">
      {/* Total Expenses Card */}
      <div className="mb-8 rounded-lg bg-transparent p-6 shadow-sm border border-gray-200">
        <div className="text-center">
          <span className="text-sm text-gray-500">Total Expenses</span>
          <div className="text-3xl font-bold mt-1 text-red-500">
            Rs {formatAmount(totalExpenses)}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 ">
        {/* Form Section */}
        <div className="rounded-lg bg-transparent p-6 shadow-sm border border-gray-200">
          <form onSubmit={formHandler} className="space-y-4">
            <div>
              <div className="text-sm text-gray-600 m-2">Title</div>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                placeholder="Expense Title"
                required
              />
            </div>

            <div>
              <div className="text-sm text-gray-600 m-2">Amount</div>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                placeholder="Expense Amount"
                required
              />
            </div>

            <div>
              <div className="text-sm text-gray-600  m-2">Date</div>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full rounded-md border text-[var(--primary-color)] border-gray-200 px-4 py-2.5 text-sm placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-between">
              <label htmlFor="category" className="text-sm text-gray-600 ml-2">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="rounded-md border border-gray-200 px-4 py-2.5 text-[var(--primary-color)] text-sm focus:border-gray-900 focus:outline-none"
              >
                <option value="Emergency">Emergency</option>
                <option value="Home Expense">Home Expense</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Hobby">Hobby</option>
                <option value="Bills">Bills</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <div className="text-sm text-gray-600 m-2">Details</div>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                placeholder="Add Details..."
                rows="4"
              />
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center rounded-md bg-red-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-red-500 focus:outline-none disabled:opacity-50"
            >
              {loading ? (
                "Submitting..."
              ) : (
                <>
                  <Plus className="mr-2 h-4 w-4 bg-transparent" /> Add Expense
                </>
              )}
            </button>
          </form>
        </div>

        {/* Transactions Section */}
        <div className="rounded-lg bg-transparent p-6 shadow-sm border border-gray-200 w-full">
          <MiniHistory list={transactions} ans="-" />
        </div>
      </div>
    </div>
  );
};

export default Expenses;
