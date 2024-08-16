import React from "react";
import { Sidebar } from "../components/index.js";
import "../../public/stylesheets/Dashboard.css";
import "../../public/stylesheets/LogIn.css";

const Dashboard = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <Sidebar />
      <div className="border-x border-y border-solid border-[--primary-color] h-[56rem] w-full mr-3 p-5">
        <div className="flex flex-row items-center justify-center gap-3">
          <div className="flex flex-col items-center justify-end gap-2 border-x border-y border-solid border-[--primary-color] px-8 py-5 rounded-lg">
            <div className="text-2xl text-[--primary-color] font-medium font-inter">
              Net Balance
            </div>
            <div className="text-5xl text-[--accent-color] font-medium font-lato">
              Rs 1,000
            </div>
          </div>
          <div className="flex flex-col items-center justify-end gap-2 border-x border-y border-solid border-[--primary-color] px-8 py-5 rounded-lg">
            <div className="text-2xl text-[--primary-color] font-medium font-inter">
              Net Expenses
            </div>
            <div className="text-5xl text-[--accent-color] font-medium font-lato">
              Rs 1,000
            </div>
          </div>
          <div className="flex flex-col items-center justify-end gap-2 border-x border-y border-solid border-[--primary-color] px-8 py-5 rounded-lg">
            <div className="text-2xl text-[--primary-color] font-medium font-inter">
              Net Incomes
            </div>
            <div className="text-5xl text-[--accent-color] font-medium font-lato">
              Rs 1,000
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 px-5 py-3">
          <div className="flex flex-row items-center justify-between w-3/4">
            <span className="text-2xl font-medium">Min</span>
            <span className="text-3xl font-medium">Income</span>
            <span className="text-2xl font-medium">Max</span>
          </div>
          <div className="flex flex-row items-center justify-between w-3/4 border-x border-y border-[--placeholder-color] border-solid p-2">
            <span className="text-3xl font-medium font-inter text-[--placeholder-color]">
              Rs10
            </span>
            <span className="text-3xl font-medium font-inter text-[--placeholder-color]">
              Rs1000
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 px-5 py-3">
          <div className="flex flex-row items-center justify-between w-3/4">
            <span className="text-2xl font-medium">Min</span>
            <span className="text-3xl font-medium">Expenses</span>
            <span className="text-2xl font-medium">Max</span>
          </div>
          <div className="flex flex-row items-center justify-between w-3/4 border-x border-y border-[--placeholder-color] border-solid p-2">
            <span className="text-3xl font-medium font-inter text-[--placeholder-color]">
              Rs10
            </span>
            <span className="text-3xl font-medium font-inter text-[--placeholder-color]">
              Rs1000
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center text-5xl font-medium font-inter p-5">
          <p>Recent Transactions</p>
        </div>

        <div className="table_component">
          <table>
            <thead>
              <tr>
                <th className="border border-x-0 border-y border-[--primary-color] p-2 ">
                  Date
                </th>
                <th className="border border-x-0 border-y border-[--primary-color] p-2 ">
                  Name
                </th>
                <th className="border border-x-0 border-y border-[--primary-color] p-2 ">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                  kasdafs
                </td>
                <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                  dafasdf
                </td>
                <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                  fasdfa
                </td>
              </tr>
              <tr>
                <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                  kasdafs
                </td>
                <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                  dafasdf
                </td>
                <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                  fasdfa
                </td>
              </tr>
              <tr>
                <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                  kasdafs
                </td>
                <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                  dafasdf
                </td>
                <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                  fasdfa
                </td>
              </tr>
              <tr>
                <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                  kasdafs
                </td>
                <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                  dafasdf
                </td>
                <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                  fasdfa
                </td>
              </tr>
              <tr>
                <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                  kasdafs
                </td>
                <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                  dafasdf
                </td>
                <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                  fasdfa
                </td>
              </tr>
              <tr>
                <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                  kasdafs
                </td>
                <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                  dafasdf
                </td>
                <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                  fasdfa
                </td>
              </tr>
              <tr>
                <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                  kasdafs
                </td>
                <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                  dafasdf
                </td>
                <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                  fasdfa
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
