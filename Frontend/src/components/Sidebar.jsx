import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  User,
  LayoutDashboard,
  CreditCard,
  ArrowUpCircle,
  ArrowDownCircle,
  LogOut,
} from "lucide-react";

const NavLink = ({ to, icon: Icon, children }) => (
  <Link
    to={to}
    className="w-full flex items-center space-x-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-200 hover:text-gray-900"
  >
    <Icon className="h-4 w-4 bg-transparent" />
    <span className="bg-transparent">{children}</span>
  </Link>
);

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
      setUsername("User");
    }
  };

  useEffect(() => {
    getName();
  }, []);

  return (
    <div className="flex w-64 flex-col px-4 py-6 items-center justify-center ">
      {/* User Profile Section */}
      <div className="flex flex-row justify-start gap-4 w-full px-2">
        <div className="flex h-10 w-10 items-center justify-center bg-gray-100 border border-gray-300 rounded-full p-1">
          <User className="h-6 w-6 text-gray-600 bg-transparent" />
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-900">{username}</h3>
          <p className="text-xs text-gray-500">Welcome Back!</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col items-start w-full pt-6">
        <NavLink to="/in/dashboard" icon={LayoutDashboard}>
          Dashboard
        </NavLink>
        <NavLink to="/in/transactions" icon={CreditCard}>
          Transactions
        </NavLink>
        <NavLink to="/in/incomes" icon={ArrowUpCircle}>
          Incomes
        </NavLink>
        <NavLink to="/in/expenses" icon={ArrowDownCircle}>
          Expenses
        </NavLink>
      </nav>

      {/* Logout Button */}
      <button
        onClick={LogoutEvent}
        className="group flex w-full items-center space-x-3 rounded-lg px-3 py-2 text-sm text-red-600 transition-colors hover:bg-red-100"
      >
        <LogOut className="h-4 w-4 bg-transparent" />
        <span className="bg-transparent">Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
