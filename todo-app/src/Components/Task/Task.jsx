import "./task.css";
function Task() {
  return (
    <div className="taskCont">
      <h2 className="taskHead">Task List</h2>
      <ul className="taskList">
        <li className="task">
          <label className="taskLabel">
            <input type="checkbox" className="Check" />
            Task One
          </label>
          <button>Delete</button>
        </li>
      </ul>
      <ul className="taskList">
        <li className="task">
          <label className="taskLabel">
            <input type="checkbox" className="Check" />
            Task Two
          </label>
          <button>Delete</button>
        </li>
      </ul>
    </div>
  );
}

export default Task;
