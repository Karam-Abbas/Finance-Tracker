import React from "react";
import { Sidebar } from "../components/index.js";
import "../../public/stylesheets/Dashboard.css";
import "../../public/stylesheets/LogIn.css";


const Incomes = () => {
  return  <div className="flex flex-row items-center justify-center">
  <Sidebar />
  <div className="border-x border-y border-solid border-[--primary-color] h-[56rem] w-full mr-3 p-5 ">
    <div className="flex items-center justify-center text-5xl font-medium font-inter p-5 ">
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
            <th className="border border-x-0 border-y border-[--primary-color] p-2 ">
              Type
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
            <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
              fasdfa
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>;
};

export default Incomes;
