import "./task.css";

function Task({ list, setList }) {
  const handleTask = (index) => {
    const updated = list.map((li, i) =>
      i === index ? { ...li, completed: !li.completed } : li
    );
    setList(updated);
  };

  const handleDelete = (index) => {
    const updated = list.filter((_, i) => i !== index);
    setList(updated);
  };

  return (
    <div>
      <h2 className="taskHead">Task List</h2>
      <div className="taskCont">
        <ul className="taskList">
          {list.map((li, index) => (
            <li key={index} className="task">
              <label className="taskLabel">
                <input
                  type="checkbox"
                  checked={li.completed}
                  className="Check"
                  onChange={() => handleTask(index)}
                />
                <span
                  style={{
                    textDecoration: li.completed ? "line-through" : "none",
                  }}
                >
                  {li.task}
                </span>
              </label>
              <button className="deleteBtn" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Task;
