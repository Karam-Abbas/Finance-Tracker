import React, { useState, useEffect } from "react";
import { MiniHistory } from "../components/index.js";
import axios from "axios";
import "../../public/stylesheets/Dashboard.css";
import "../../public/stylesheets/LogIn.css";

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
    return `${formattedAmount}${suffixes[suffixIndex]}`;
  };

  const formHandler = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.title || !formData.amount || !formData.date) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Submit the new expense
      await axios.post("/expenses/addExpense", formData);
      console.log(formData);

      // Reset form after successful submission
      setFormData({
        title: "",
        amount: "",
        date: "",
        category: "Other",
        description: "",
      });

      // Refetch transactions after adding a new expense
      fetchData(); // Call fetchData to update transactions
    } catch (error) {
      console.error(error.message);
      setError("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("/index/getAll");
      setTotalExpenses(response.data.total_expenses);
      setTransactions(response.data.transactions);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data on component mount
  }, []);

  return (
    <div className="border-x border-y border-solid border-[--primary-color] h-[56rem] w-full mr-3 p-5 flex flex-col items-center">
      <div className="flex flex-row items-center justify-center w-3/4 border-x border-y border-[--placeholder-color] border-solid p-2">
        <div className="font-lato">
          <span className="text-2xl text-[--primary-color] font-semibold">
            Total Expenses:{" "}
          </span>{" "}
          <span className="text-3xl text-[--danger] font-bold">
            Rs {formatAmount(totalExpenses)}
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center justify-evenly w-3/4 h-full">
        <form
          onSubmit={formHandler}
          className="flex flex-col items-center justify-center h-full p-5 gap-2 w-1/2 text-[--primary-color]"
        >
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border-[--primary-color] border-solid border-x border-y px-5 py-3 rounded-md w-3/4"
            placeholder="Expense Title"
          />
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="border-[--primary-color] border-solid border-x border-y px-5 py-3 rounded-md w-3/4"
            placeholder="Expense Amount"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border-[--primary-color] border-solid border-x border-y px-5 py-3 rounded-md w-3/4"
          />
          <div className="flex flex-row gap-4 items-center justify-between w-3/4">
            <label htmlFor="category" className="text-xl font-lato">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="border-[--primary-color] border-solid border-x border-y px-5 py-3 rounded-md hover:scale-105"
            >
              <option value="Pocket Money">Emergency</option>
              <option value="Freelance">Home Expense</option>
              <option value="Business">Entertainment</option>
              <option value="Side Businesses">Hobby</option>
              <option value="Salary">Bills</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border-[--primary-color] border-solid border-x border-y px-5 py-3 rounded-md w-3/4 resize-none"
            placeholder="Add Details...."
            rows="4"
          />
          {error && <p className="text-red-500">{error}</p>}
          <div className="w-3/4">
            <button
              type="submit"
              disabled={loading}
              className={`px-3 py-3 rounded-lg text-white bg-[--accent-color] hover:scale-105 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Submitting..." : "+ Add Expense"}
            </button>
          </div>
        </form>

        <div className="w-1/2">
          <MiniHistory list={transactions} ans="-" />
        </div>
      </div>
    </div>
  );
};

export default Expenses;
