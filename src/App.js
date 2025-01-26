import TaskList from "./TaskList";
import { useState } from "react";
import AddTask from "./AddTask";
import "./Styles/base.css";

function App() {
  const [tasks, setTasks] = new useState([]);
  const headingStyling = {
    color: "black",
    marginTop: "8%",
    textAlign: "center",
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  const addTask = (taskTitle) => {
    const newTasks = [...tasks, taskTitle];
    setTasks(newTasks);
  };
  return (
    <div>
      <h1 style={headingStyling}>Todo App</h1>
      <AddTask list={tasks} addTask={addTask} />
      <TaskList list={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
