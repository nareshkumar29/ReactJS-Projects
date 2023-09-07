import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      const task = { id: Date.now(), title: newTask, completed: false };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className='container'>
      <h2 className='todo'>To-Do List</h2>
      <div className='input'>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className='tasks'>
        <h3 >Tasks:</h3>
        {tasks.length === 0 ? (
          <p>No tasks in the list</p>
        ) : (
          <ul>
            {tasks.map((task) => (
              <li key={task.id} className='task'>
                <span
                  style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                  onClick={() => toggleTaskCompletion(task.id)}
                >
                  {task.title}
                </span>
                <button onClick={() => removeTask(task.id)}>&#x274C;</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div><h4>
        <p>Total Tasks: {tasks.length}</p>
        <p>Completed Tasks: {completedTasks.length}</p>
        </h4>
      </div>
    </div>
  );
};

export default App;

