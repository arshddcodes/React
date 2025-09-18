import "./addtask.css";

function AddTask({ task, setTask, list, setList }) {
  function handleTask() {
    setList([...list, { task: task, completed: false }]);
    setTask("");
  }
  return (
    <div className="AddCont">
      <h1 className="AddHead">Todo List</h1>
      <div className="InputCont">
        <input
          value={task}
          type="text"
          className="AddInput"
          placeholder="Add To Do Here"
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="AddBtn" onClick={handleTask}>
          add
        </button>
      </div>
    </div>
  );
}

export default AddTask;
