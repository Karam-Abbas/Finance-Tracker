import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header, Footer } from "./index.js";

function Layout() {
  const location = useLocation();
  const isInRoute = location.pathname.startsWith('/in');

  return (
    <div className="min-h-screen flex flex-col">
      <Header isInRoute={isInRoute} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;