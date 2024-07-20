import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import { Task } from './types/index';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    const newTask = {
      id: Date.now(),
      text,
      completed:false
    };
    setTasks([...tasks, newTask]);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // const data = localStorage.getItem('tasks');
    // if (data) {
    //   const tasksArray = JSON.parse(data)
    //   console.log(tasksArray)
    //   setTasks([...tasksArray, newTask]);
    // }
  };

  const toggleComplete = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? {...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  const editTask = (id: number, newText: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  useEffect(() => {
    const data = localStorage.getItem('tasks');
    if (data) {
      setTasks(JSON.parse(data));
    }
  }, []);

  return(
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl mb-4'>Task Manager</h1>
      <AddTask addTask={addTask}/>
      <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} editTask = {editTask}/>
    </div>
  )
}

export default App;
