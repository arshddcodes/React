import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Apppage from "./pages/Apppage";
import User from "./pages/User";

function App() {
  return (
    <>
      <BrowserRouter>
      <Link to="/dashboard">DashBord</Link>
        <Routes>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Product" element={<Product />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Home" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/" element={<Apppage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
