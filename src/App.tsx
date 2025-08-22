import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';
import './App.css';

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('tasks');
    if (stored) {
      try {
        const parsed: Task[] = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setTasks(parsed);
        }
      } catch (error) {
        console.error('Error', error);
      }
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Error', error);
    }
  }, [tasks]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };


  return (
    <div className="todo-container">
      <h1>Simple Todo App</h1>
      <TaskForm onAdd={addTask} />
      <ul>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))
        }
      </ul>
    </div>
  );
};

export default App;
