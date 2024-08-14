import React from "react";
import "../../public/stylesheets/Sidebar.css";
import "../../public/stylesheets/LogIn.css";

const Sidebar = () => {
  return (
    <>
      <div className="h-[97vh] border-solid border-y border-x border-black w-[14vw] p-5 m-3 flex flex-col">
        <div className="flex flex-row items-start gap-4">
          <img
            src="../../public/images/user.svg"
            className="w-20 h-20 p-2 rounded-full border-solid border-y border-x border-black"
          />
          <div className="h-20 flex flex-col items-start justify-center">
            <div className="text-2xl font-bold text-[--accent-color]">Name</div>
            <div className="text-lg font-normal text-[--primary-color]">
              Your Money
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="pt-10">
            <div className="flex flex-row gap-3 items-center justify-start hover:border-[--primary-color] hover:border-l-2 hover:px-2 hover:scale-105 hover:transition-all duration-100">
              <img src="../../public/images/chart-histogram.svg" className="" />
              <a className="text-lg font-medium text-[--primary-color] hover: cursor-pointer">
                Dashboard
              </a>
            </div>
            <div className="flex flex-row gap-3 items-center justify-start hover:border-[--primary-color] hover:border-l-2 hover:px-2 hover:scale-105 hover:transition-all duration-100">
              <img src="../../public/images/credit-card.svg" className="" />
              <a className="text-lg font-medium text-[--primary-color] hover: cursor-pointer">
                Transactions
              </a>
            </div>
            <div className="flex flex-row gap-3 items-center justify-start hover:border-[--primary-color] hover:border-l-2 hover:px-2 hover:scale-105 hover:transition-all duration-100">
              <img src="../../public/images/money.svg" className="" />
              <a className="text-lg font-medium text-[--primary-color] hover: cursor-pointer">
                Incomes
              </a>
            </div>
            <div className="flex flex-row gap-3 items-center justify-start hover:border-[--primary-color] hover:border-l-2 hover:px-2 hover:scale-105 hover:transition-all duration-100">
              <img src="../../public/images/sad.svg" className="" />
              <a className="text-lg font-medium text-[--primary-color] hover: cursor-pointer">
                Expenses
              </a>
            </div>
          </div>
          <div className="flex flex-row gap-3 items-center justify-start hover:border-[--primary-color] hover:border-l-2 hover:px-2 hover:scale-105 hover:transition-all duration-100">
            <img src="../../public/images/fi-rs-sign-out.svg" className="" />
            <a
              className="text-lg font-medium text-[--primary-color] hover: cursor-pointer"
              href=""
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
