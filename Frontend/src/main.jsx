import React from "react";
import ReactDOM from "react-dom/client";
import { Layout, In } from "./components/index.js";
import {
  Dashboard,
  Transaction,
  Incomes,
  Expenses,
  Entry,
  Homepage,
  Contact,
  About,
} from "./pages/index.js";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/entry" element={<Entry />} />
      <Route path="/in" element={<In />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="transactions" element={<Transaction />} />
        <Route path="incomes" element={<Incomes />} />
        <Route path="expenses" element={<Expenses />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
