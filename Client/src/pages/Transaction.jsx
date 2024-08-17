import React from "react";
import "../../public/stylesheets/Dashboard.css";
import "../../public/stylesheets/LogIn.css";
import { History } from "../components/index";

const Transaction = () => {
  return (<>
      <div className="border-x border-y border-solid border-[--primary-color] h-[56rem] w-full mr-3 p-5">
        <History/>
      </div>
  </>);
};

export default Transaction;
