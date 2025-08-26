import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ListItem from "./components/Listitem";

const ThisContext = react.CreateContext();

function App() {
  const product = [
    { id: "deskt470", name: "lenovo" },
    { id: "prin546", name: "priner" },
    { id: "deskt470", name: "lenovo" },
  ];
  return (
    <>
    <ThisContext.Provider value={product}>
      <div>
        <Listitem product={product}/>
      </div>
      </ThisContext.Provider>
    </>
  );
}

export default App;
