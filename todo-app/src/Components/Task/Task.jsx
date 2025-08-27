import "./task.css";
function Task({ list }) {
  return (
    <div>
      <h2 className="taskHead">Task List</h2>
      <div className="taskCont">
        <ul className="taskList">
          {list.map((li, index) => (
            <li key={index} className="task">
              <label className="taskLabel">
                <input type="checkbox" className="Check" />
                {li}
              </label>
              <button className="deleteBtn">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Task;
