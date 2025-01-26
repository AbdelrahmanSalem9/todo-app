import "./Styles/taskItem.css";
import { useRef } from "react";

function TaskItem({ task, index, deleteTask }) {
  const taskRef = useRef(null);

  function handleCompleteTask() {
    taskRef.current.childNodes[0].classList.add("completed-task");
    taskRef.current.childNodes[1].style.visibility = "hidden";
  }
  function handleDeleteTask() {
    deleteTask(index);
  }
  return (
    <div ref={taskRef} className="task-card">
      <p className="task-title">{task}</p>
      <button
        onClick={handleCompleteTask}
        type="submit"
        className="btn check-btn"
      >
        &#10004;
      </button>
      <button
        onClick={handleDeleteTask}
        type="submit"
        className="btn delete-btn"
      >
        &#10006;
      </button>
    </div>
  );
}
export default TaskItem;
