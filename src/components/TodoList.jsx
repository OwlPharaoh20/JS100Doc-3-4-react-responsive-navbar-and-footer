import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask('');
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((t) =>
        t.id === taskId ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">To-Do List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border p-2 rounded mb-4"
        placeholder="Enter a task..."
      />
      <button onClick={handleAddTask} className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Task
      </button>
      <ul className="mt-4">
        {tasks.map((t) => (
          <li key={t.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => handleToggleComplete(t.id)}
              className="mr-2"
            />
            <span className={`flex-grow ${t.completed ? 'line-through' : ''}`}>{t.text}</span>
            <button
              onClick={() => handleDeleteTask(t.id)}
              className="bg-red-500 text-white px-2 py-1 rounded ml-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
