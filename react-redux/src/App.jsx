import "./App.css";
import { increment, decrement } from "./redux/feature/counter/conterSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter.value);
  return (
    <>
      <div>
        <h1>counter : {count}</h1>
        <button onClick={() => setCount(count + 1)}>increment</button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
      </div>
    </>
  );
}

export default App;
