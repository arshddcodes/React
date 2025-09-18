import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import "./layout.scss";

function Layout() {
  return (
    <div className="layout-cont">
      <div className="mt-2 mb-2 layout-nav">
        <NavBar />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
