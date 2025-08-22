type Task = {
  id: number;
  title: string;
  completed: boolean;
}

type Props = {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<Props> = ({ task, onToggle, onDelete }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
