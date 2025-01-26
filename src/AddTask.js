import React, { useRef } from "react";
import "./Styles/addTask.css";
function AddTask({ addTask }) {
  const inputRef = useRef(null);

  const handleAddTask = () => {
    const taskTitle = inputRef.current.value.trim();
    addTask(taskTitle);
    inputRef.current.value = "";
  }

  return (
    <div className="add-task">
      <input
        ref={inputRef}
        className="add-task-input"
        type="text"
        placeholder="Add a new task"
      />
      <button className="add-task-btn" onClick={handleAddTask} type="submit">
        +
      </button>
    </div>
  );
}

export default AddTask;
