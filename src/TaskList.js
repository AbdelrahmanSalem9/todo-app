import "./Styles/tasklist.css";
import TaskItem from "./TaskItem";

function TaskList({ list, deleteTask }) {
  return (
    <div className="task-list">
      <div className="tasks-count">
        {list.length !== 0 && <p>Tasks to do - {list.length}</p>}
      </div>
      {list.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
