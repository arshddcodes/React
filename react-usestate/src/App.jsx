import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(1);
  function incre() {
    setCount(count + 1);
    console.log(count + 1);
  }

  function decre() {
    setCount(count - 1);
    console.log(count - 1);
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={incre}>Increment</button>
      <button onClick={decre}>decrement</button>
    </>
  );
}

// function App() {
//   let [active, setActive] = useState(true);

//   let isActive;

//   function giveStyle(){
//     setActive(true);
//     console.log(active);
//   }
//   function removeStyle(){
//     setActive(false);
//     console.log(active)
//   }
//   const style = { textDecoration: "line-through" };
//   return (
//     <>
//       {console.log("code render")}
//       <h1 style={active ? style : null}>this is my first react app</h1>
//       <button onClick={giveStyle}>Give Style</button>
//       <button onClick={removeStyle}>Remove Style</button>
//     </>
//   );
// }

// {
//   let isActive;
//   function giveStyle(){
//     isActive = true;
//     console.log(isActive);
//   }
//   function removeStyle(){
//     isActive = false;
//     console.log(isActive)
//   }
//   const style = { textDecoration: "line-through" };
//   return (
//     <>
//       <h1 style={isActive ? style : null}>this is my first react app</h1>
//       <button onClick={giveStyle}>Give Style</button>
//       <button onClick={removeStyle}>Remove Style</button>
//     </>
//   );
// }

export default App;
