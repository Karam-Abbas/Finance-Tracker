import React from "react";
import { Outlet } from "react-router-dom";
import { Header,Footer} from "./index.js";
function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default Layout;
