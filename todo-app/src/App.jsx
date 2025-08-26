import "./App.css";
import Task from "./Components/Task/Task";
import AddTask from "./Components/Add task/AddTask";
import { useState } from "react";


function App() {
  const [task, setTask] = useState("");
  console.log("task:", task)
  return (
    <div className="TaskCont">
      <AddTask task={task} setTask={setTask}/>
      <Task />
    </div>
  );
}

export default App;
