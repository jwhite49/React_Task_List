import React, { useState } from 'react';
import TaskInput from './TaskInput';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  const deleteTask = (indexToDelete) =>{
    setTasks(tasks.filter((_,index)=> index !==indexToDelete))
  };

  return (
    <div className='App'>
    <h1>TaskManager</h1>
    <TaskInput handleAddTask={addTask} />
    <ul>
      {tasks.map((task,index) => (
        <li key = {index}>
          {task}
          <button onClick={()=>deleteTask(index)}> Delete </button>
        </li>
      ))};
    </ul>
    </div>

  );
};
export default App;
