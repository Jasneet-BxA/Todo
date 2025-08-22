import React, { useState } from 'react';
import type { FormEvent } from 'react';


interface TaskFormProps {
  onAdd: (title: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
      className="task-input" 
        type="text"
        placeholder="Add task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)
        }
      />
      <button type="submit" className="add-btn">Add</button>
    </form>
  );
};

export default TaskForm;
