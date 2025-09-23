import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(() => {
    const counter = localStorage.getItem("count");
    return counter !== null ? Number(counter) : 0;
  });

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const handleclear = () => {
    localStorage.removeItem("count");
  };

  return (
    <>
      <h1>count :{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment </button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <button onClick={handleclear}>Clear</button>
    </>
  );
}

export default App;
