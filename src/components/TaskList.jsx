// component import
import TaskItem from "./TaskItem";

// styles
import styles from "./TaskList.module.css";

function TaskList({ tasks }) {
  return (
    <ul className={styles.tasks}>
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <TaskItem task={task} key={task.id} />
        ))}
    </ul>
  );
}

export default TaskList;
