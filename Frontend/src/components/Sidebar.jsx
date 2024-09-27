import React, { useState, useEffect } from "react";
import "../../public/stylesheets/Sidebar.css";
import "../../public/stylesheets/LogIn.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Sidebar = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("Name");
  const LogoutEvent = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("/user/logout");
      console.log(response.data);
      navigate("/entry");
    } catch (error) {
      console.log(error);
    }
  };
  const getName = async () => {
    try {
      const response = await axios.get("/index/getUserName");
      setUsername(response.data.username);
    } catch (error) {
      console.log(error);
      return "User";
    }
  };
  useEffect(() => {
    getName();
  }, []);
  return (
    <>
      <div className="h-[56rem] border-solid border-y border-x border-[--primary-color] w-[20rem] p-5 m-3 flex flex-col">
        <div className="flex flex-row items-start gap-4">
          <img
            src="../../public/images/user.svg"
            className="w-20 h-20 p-2 rounded-full border-solid border-y border-x border-[--primary-color]"
          />
          <div className="h-20 flex flex-col items-start justify-center">
            <div className="text-xl font-bold text-[--accent-color]">
              {username}
            </div>
            <div className="text-lg font-normal text-[--primary-color]">
              Your Money
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="pt-9">
            <div className="flex flex-row gap-3 items-center justify-start hover:border-[--primary-color] hover:border-l-2 hover:px-2 hover:scale-105 hover:transition-all duration-100">
              <img src="../../public/images/chart-histogram.svg" className="" />
              <Link
                to="/in/dashboard"
                className="text-lg font-normal text-[--primary-color] hover: cursor-pointer"
              >
                Dashboard
              </Link>
            </div>
            <div className="flex flex-row gap-3 items-center justify-start hover:border-[--primary-color] hover:border-l-2 hover:px-2 hover:scale-105 hover:transition-all duration-100">
              <img src="../../public/images/credit-card.svg" className="" />
              <Link
                to="/in/transactions"
                className="text-lg font-normal text-[--primary-color] hover: cursor-pointer"
              >
                Transactions
              </Link>
            </div>
            <div className="flex flex-row gap-3 items-center justify-start hover:border-[--primary-color] hover:border-l-2 hover:px-2 hover:scale-105 hover:transition-all duration-100">
              <img src="../../public/images/money.svg" className="" />
              <Link
                to="/in/incomes"
                className="text-lg font-normal text-[--primary-color] hover: cursor-pointer"
              >
                Incomes
              </Link>
            </div>
            <div className="flex flex-row gap-3 items-center justify-start hover:border-[--primary-color] hover:border-l-2 hover:px-2 hover:scale-105 hover:transition-all duration-100">
              <img src="../../public/images/sad.svg" className="" />
              <Link
                to="/in/expenses"
                className="text-lg font-normal text-[--primary-color] hover: cursor-pointer"
              >
                Expenses
              </Link>
            </div>
          </div>

          <div className="flex flex-row gap-3 items-center justify-start hover:border-[--primary-color] hover:border-l-2 hover:px-2 hover:scale-105 hover:transition-all duration-100">
            <img src="../../public/images/fi-rs-sign-out.svg" className="" />
            <a
              className="text-lg font-normal text-[--primary-color] hover: cursor-pointer"
              href=""
              onClick={LogoutEvent}
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
