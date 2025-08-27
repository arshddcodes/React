import "./App.css";
import Task from "./Components/Task/Task";
import AddTask from "./Components/Add task/AddTask";
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  return (
    <div className="TaskCont">
      <AddTask task={task} setTask={setTask} list={list} setList={setList} />
      <Task list={list} setList={setList} />
    </div>
  );
}

export default App;
