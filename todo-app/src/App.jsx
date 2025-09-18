import "./App.css";
import Task from "./Components/Task/Task";
import AddTask from "./Components/Add task/AddTask";
import { useEffect, useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState(() => {
    let local = localStorage.getItem("list");
    return local !== 0 ? JSON.parse(local) : [];
  });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <div className="TaskCont">
      <AddTask task={task} setTask={setTask} list={list} setList={setList} />
      <Task list={list} setList={setList} />
    </div>
  );
}

export default App;
