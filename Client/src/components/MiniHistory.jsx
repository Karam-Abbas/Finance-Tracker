import React from "react";
import "../../public/stylesheets/Dashboard.css";
import "../../public/stylesheets/LogIn.css";
const MiniHistory = () => {
  return (
    <div>
      <div className="flex items-center justify-center text-3xl font-medium font-inter p-5">
        <p>History</p>
      </div>
      <div className="table_component">
        <table className="w-full">
          <thead>
            <tr>
              <th className="p-2 text-xl font-lato">
                Name
              </th>
              <th className="p-2 text-xl font-lato">
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
            </tr>
            <tr>
              <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                kasdafs
              </td>
              <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                dafasdf
              </td>
            </tr>
            <tr>
              <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                kasdafs
              </td>
              <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                dafasdf
              </td>
            </tr>
            <tr>
              <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                kasdafs
              </td>
              <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                dafasdf
              </td>
            </tr>
            <tr>
              <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                kasdafs
              </td>
              <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                dafasdf
              </td>
            </tr>
            <tr>
              <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                kasdafs
              </td>
              <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                dafasdf
              </td>
            </tr>
            <tr>
              <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                kasdafs
              </td>
              <td className="border border-x-0 border-y border-[--primary-color] p-2 ">
                dafasdf
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MiniHistory;
