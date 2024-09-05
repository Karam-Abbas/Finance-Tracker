import React, { useEffect } from "react";
import { MiniHistory } from "../components/index.js";
import "../../public/stylesheets/Dashboard.css";
import "../../public/stylesheets/LogIn.css";

const Incomes = () => {
  // const [title,setTitle] = useState();
  // const [amount,setAmount] = useState();
  // const [date,setDate] = useState();
  // const [category,setCategory] = useState();
  // const [description,setDescription] = useState();
  // useEffect(()=>{},[ title, amount, date,category,description ]);
  // const formHandler = async(e) =>{
  //   e.preventDefault();
  //   const userData = { title, amount, date,category,description };
  //   try {
  //   const response = await axios.post("/income/addIncome",userData );
  //   console.log(response.data); 
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  const formHandler=()=>{};
  return (
    <div className="border-x border-y border-solid border-[--primary-color] h-[56rem] w-full mr-3 p-5 flex flex-col items-center">
      <div className="flex flex-row items-center justify-center w-3/4 border-x border-y border-[--placeholder-color] border-solid p-2">
        <div className="font-lato">
          <span className="text-2xl text-[--primary-color] font-semibold">
            Total Income:{" "}
          </span>{" "}
          <span className="text-3xl text-[--accent-color] font-bold">
            Rs10000
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center justify-evenly w-3/4 h-full">
        <form
        onSubmit={formHandler} 
        className="flex flex-col items-center justify-center h-full p-5 gap-2 w-1/2 text-[--primary-color]">
          <input
            type="text"
            name="title"
            className="border-[--primary-color] border-solid border-x border-y px-5 py-3 rounded-md w-3/4"
            placeholder="Income Title"
          />
          <input
            type="text"
            name="amount"
            className="border-[--primary-color] border-solid border-x border-y px-5 py-3 rounded-md w-3/4"
            placeholder="Income Amount"
          />
          <input
            type="date"
            name="date"
            className="border-[--primary-color] border-solid border-x border-y px-5 py-3 rounded-md w-3/4"
          />
          <div className="flex flex-row gap-4 items-center justify-between w-3/4">
            <label htmlFor="category" className="text-xl font-lato">Category</label>
            <select
              id="category"
              className="border-[--primary-color] border-solid border-x border-y px-5 py-3 rounded-md hover:scale-105"
            >
              <option value="Pocket Money">Pocket Money</option>
              <option value="Freelance">Freelance</option>
              <option value="Business">Business</option>
              <option value="Side Businesses">Side Businesses</option>
              <option value="Salary">Salary</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <textarea
            name="description"
            className="border-[--primary-color] border-solid border-x border-y px-5 py-3 rounded-md w-3/4 resize-none"
            placeholder="Add Details...."
            rows="4"
          />
          <div className=" w-3/4">
            <button type="submit" className=" px-3 py-3 rounded-lg text-white bg-[--accent-color] hover:scale-105">+ Add Income</button>
          </div>
        </form>
        <div className="w-1/2">
        <MiniHistory />
        </div>
      </div>
    </div>
  );
};

export default Incomes;
