import React from "react";
import "../../public/stylesheets/Dashboard.css";
import "../../public/stylesheets/LogIn.css";
import { History } from "../components/index";

const Transaction = () => {
  return (<>
      <div className="p-4 space-y-8 border rounded-lg w-full h-full mr-4">
        <History/>
      </div>
  </>);
};

export default Transaction;
