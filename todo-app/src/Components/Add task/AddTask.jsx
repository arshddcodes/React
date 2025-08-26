import "./addtask.css";

function AddTask({ task, setTask }) {
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
        <button className="AddBtn">add</button>
      </div>
    </div>
  );
}

export default AddTask;
